import express from 'express';
import { pool } from '../server.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all programs
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM programs WHERE status = $1 ORDER BY created_at DESC',
      ['active']
    );

    res.json({
      total: result.rows.length,
      programs: result.rows
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch programs' });
  }
});

// Get program by ID
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM programs WHERE id = $1',
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Program not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch program' });
  }
});

// Create program (admin only)
router.post('/', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const { name, slug, description, price, durationDays, maxParticipants, metadata } = req.body;

    const result = await pool.query(
      'INSERT INTO programs (name, slug, description, price, duration_days, max_participants, metadata) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [name, slug, description, price, durationDays, maxParticipants, JSON.stringify(metadata)]
    );

    res.status(201).json({
      message: 'Program created successfully',
      program: result.rows[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create program' });
  }
});

// Update program (admin only)
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const { name, description, price, durationDays, maxParticipants, status, metadata } = req.body;

    const result = await pool.query(
      'UPDATE programs SET name = $1, description = $2, price = $3, duration_days = $4, max_participants = $5, status = $6, metadata = $7, updated_at = CURRENT_TIMESTAMP WHERE id = $8 RETURNING *',
      [name, description, price, durationDays, maxParticipants, status, JSON.stringify(metadata), req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Program not found' });
    }

    res.json({
      message: 'Program updated successfully',
      program: result.rows[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update program' });
  }
});

export default router;
