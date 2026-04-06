import express from 'express';
import { pool } from '../server.js';
import { authenticateToken } from '../middleware/auth.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// Create contact (public)
router.post('/', [
  body('email').isEmail(),
  body('firstName').notEmpty(),
  body('message').notEmpty(),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, firstName, lastName, phone, message, source } = req.body;

    const result = await pool.query(
      'INSERT INTO contacts (email, first_name, last_name, phone, message, source) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [email, firstName, lastName, phone, message, source || 'website']
    );

    res.status(201).json({
      message: 'Contact created successfully',
      contact: result.rows[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create contact' });
  }
});

// Get all contacts (admin only)
router.get('/', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const { status, limit = 50, offset = 0 } = req.query;

    let query = 'SELECT * FROM contacts';
    let params = [];

    if (status) {
      query += ' WHERE status = $1';
      params.push(status);
    }

    query += ' ORDER BY created_at DESC LIMIT $' + (params.length + 1) + ' OFFSET $' + (params.length + 2);
    params.push(limit, offset);

    const result = await pool.query(query, params);

    res.json({
      total: result.rows.length,
      contacts: result.rows
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// Update contact status (admin only)
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const { status, tags, notes } = req.body;

    const result = await pool.query(
      'UPDATE contacts SET status = $1, tags = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
      [status, tags, req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({
      message: 'Contact updated',
      contact: result.rows[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update contact' });
  }
});

export default router;
