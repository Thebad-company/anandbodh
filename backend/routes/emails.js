import express from 'express';
import { pool } from '../server.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Create email campaign (admin only)
router.post('/campaigns', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const { name, subject, content, recipientType, scheduledAt } = req.body;

    const result = await pool.query(
      'INSERT INTO email_campaigns (name, subject, content, recipient_type, scheduled_at) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, subject, content, recipientType, scheduledAt]
    );

    res.status(201).json({
      message: 'Campaign created',
      campaign: result.rows[0]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create campaign' });
  }
});

// Get campaigns (admin only)
router.get('/campaigns', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const result = await pool.query(
      'SELECT * FROM email_campaigns ORDER BY created_at DESC'
    );

    res.json({
      total: result.rows.length,
      campaigns: result.rows
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch campaigns' });
  }
});

// Get campaign stats
router.get('/campaigns/:id/stats', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const result = await pool.query(
      'SELECT * FROM email_campaigns WHERE id = $1',
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Campaign not found' });
    }

    const campaign = result.rows[0];

    res.json({
      campaign,
      stats: {
        sent: campaign.open_count + campaign.click_count,
        opened: campaign.open_count,
        clicked: campaign.click_count,
        openRate: campaign.open_count > 0 ? ((campaign.open_count / (campaign.open_count + campaign.click_count)) * 100).toFixed(2) : 0,
        clickRate: campaign.click_count > 0 ? ((campaign.click_count / (campaign.open_count + campaign.click_count)) * 100).toFixed(2) : 0
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

export default router;
