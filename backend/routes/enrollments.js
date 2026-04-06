import express from 'express';
import { pool } from '../server.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Enroll in program
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { programId } = req.body;

    // Check if already enrolled
    const existing = await pool.query(
      'SELECT * FROM enrollments WHERE user_id = $1 AND program_id = $2',
      [req.user.userId, programId]
    );

    if (existing.rows.length > 0) {
      return res.status(400).json({ error: 'Already enrolled in this program' });
    }

    const result = await pool.query(
      'INSERT INTO enrollments (user_id, program_id) VALUES ($1, $2) RETURNING *',
      [req.user.userId, programId]
    );

    res.status(201).json({
      message: 'Enrolled successfully',
      enrollment: result.rows[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Enrollment failed' });
  }
});

// Get enrollment details
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT e.*, p.name as program_name, p.slug, p.duration_days 
       FROM enrollments e 
       JOIN programs p ON e.program_id = p.id 
       WHERE e.id = $1 AND e.user_id = $2`,
      [req.params.id, req.user.userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch enrollment' });
  }
});

// Update progress
router.put('/:id/progress', authenticateToken, async (req, res) => {
  try {
    const { progressPercentage } = req.body;

    const result = await pool.query(
      'UPDATE enrollments SET progress_percentage = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 AND user_id = $3 RETURNING *',
      [progressPercentage, req.params.id, req.user.userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }

    res.json({
      message: 'Progress updated',
      enrollment: result.rows[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update progress' });
  }
});

// Cancel enrollment
router.put('/:id/cancel', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query(
      'UPDATE enrollments SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 AND user_id = $3 RETURNING *',
      ['cancelled', req.params.id, req.user.userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Enrollment not found' });
    }

    res.json({
      message: 'Enrollment cancelled',
      enrollment: result.rows[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to cancel enrollment' });
  }
});

export default router;
