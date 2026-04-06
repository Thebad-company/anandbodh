import express from 'express';
import { pool } from '../server.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Track event
router.post('/events', async (req, res) => {
  try {
    const { userId, eventType, eventData } = req.body;

    await pool.query(
      'INSERT INTO analytics_events (user_id, event_type, event_data) VALUES ($1, $2, $3)',
      [userId, eventType, JSON.stringify(eventData)]
    );

    res.status(201).json({ message: 'Event tracked' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to track event' });
  }
});

// Get dashboard stats (admin only)
router.get('/dashboard', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    // Total users
    const usersResult = await pool.query('SELECT COUNT(*) as count FROM users WHERE role = $1', ['member']);
    const totalUsers = parseInt(usersResult.rows[0].count);

    // Total enrollments
    const enrollmentsResult = await pool.query('SELECT COUNT(*) as count FROM enrollments WHERE status = $1', ['active']);
    const totalEnrollments = parseInt(enrollmentsResult.rows[0].count);

    // Total contacts
    const contactsResult = await pool.query('SELECT COUNT(*) as count FROM contacts');
    const totalContacts = parseInt(contactsResult.rows[0].count);

    // Revenue (sum of completed payments)
    const revenueResult = await pool.query(
      'SELECT SUM(CAST(p.price AS DECIMAL)) as total FROM enrollments e JOIN programs p ON e.program_id = p.id WHERE e.payment_status = $1',
      ['completed']
    );
    const totalRevenue = revenueResult.rows[0].total || 0;

    // Recent events
    const eventsResult = await pool.query(
      'SELECT * FROM analytics_events ORDER BY created_at DESC LIMIT 10'
    );

    res.json({
      stats: {
        totalUsers,
        totalEnrollments,
        totalContacts,
        totalRevenue: parseFloat(totalRevenue).toFixed(2)
      },
      recentEvents: eventsResult.rows
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch dashboard stats' });
  }
});

// Get user growth
router.get('/growth', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const result = await pool.query(
      `SELECT DATE(created_at) as date, COUNT(*) as count 
       FROM users 
       WHERE role = $1 AND created_at >= NOW() - INTERVAL '30 days'
       GROUP BY DATE(created_at)
       ORDER BY date ASC`,
      ['member']
    );

    res.json({
      period: '30 days',
      data: result.rows
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch growth data' });
  }
});

export default router;
