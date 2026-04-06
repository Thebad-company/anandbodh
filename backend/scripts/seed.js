import { pool } from '../server.js';
import bcrypt from 'bcryptjs';

async function seed() {
  try {
    console.log('🌱 Seeding database...');

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 10);
    await pool.query(
      'INSERT INTO users (email, password_hash, first_name, last_name, role) VALUES ($1, $2, $3, $4, $5) ON CONFLICT DO NOTHING',
      ['admin@anandbodh.com', adminPassword, 'Admin', 'User', 'admin']
    );

    // Create sample programs
    const programs = [
      {
        name: 'Soleus Activation',
        slug: 'soleus-activation',
        description: 'Activate your soleus muscle for metabolic health',
        price: 99.99,
        durationDays: 30,
        maxParticipants: 100
      },
      {
        name: 'Dhyan Meditation',
        slug: 'meditation',
        description: 'Transform your mind through guided meditation',
        price: 79.99,
        durationDays: 21,
        maxParticipants: 200
      },
      {
        name: 'Ayurveda Longevity',
        slug: 'ayurveda',
        description: 'Ancient wisdom for modern wellness',
        price: 129.99,
        durationDays: 60,
        maxParticipants: 50
      },
      {
        name: 'Thrive@Work',
        slug: 'thrive-at-work',
        description: 'Wellness in the workplace',
        price: 199.99,
        durationDays: 90,
        maxParticipants: 30
      },
      {
        name: 'Wake Up Life',
        slug: 'wake-up-life',
        description: 'Transform your daily routine',
        price: 89.99,
        durationDays: 14,
        maxParticipants: 150
      }
    ];

    for (const program of programs) {
      await pool.query(
        'INSERT INTO programs (name, slug, description, price, duration_days, max_participants) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT DO NOTHING',
        [program.name, program.slug, program.description, program.price, program.durationDays, program.maxParticipants]
      );
    }

    console.log('✅ Database seeded successfully');
    console.log('📝 Admin credentials:');
    console.log('   Email: admin@anandbodh.com');
    console.log('   Password: admin123');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
}

seed();
