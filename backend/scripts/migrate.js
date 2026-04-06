import { pool } from '../server.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function migrate() {
  try {
    console.log('🔄 Running database migrations...');

    // Read migration SQL
    const migrationPath = path.join(__dirname, '../db/schema.sql');
    const schema = fs.readFileSync(migrationPath, 'utf8');

    // Execute migration
    await pool.query(schema);

    console.log('✅ Database migrations completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

migrate();
