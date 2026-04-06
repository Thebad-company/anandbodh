# 🚀 Backend CRM Setup Guide

## Overview

Your custom CRM backend is now ready! It's a lightweight, focused system built with Node.js, Express, and PostgreSQL.

## What's Included

### Core Features
- ✅ User authentication (register, login, JWT)
- ✅ Program management
- ✅ Enrollment tracking
- ✅ Contact management
- ✅ Email campaigns
- ✅ Analytics dashboard
- ✅ Role-based access control

### Database Tables
- **users** - Members, staff, admins
- **programs** - Wellness programs
- **enrollments** - Program enrollments
- **contacts** - Lead management
- **email_campaigns** - Email marketing
- **analytics_events** - Event tracking

## Quick Start

### Option 1: Docker (Recommended)

```bash
# Start everything with one command
docker-compose up

# Backend: http://localhost:5000
# Frontend: http://localhost:3000
# Database: localhost:5432
```

### Option 2: Manual Setup

#### 1. Install PostgreSQL

**macOS:**
```bash
brew install postgresql
brew services start postgresql
```

**Linux:**
```bash
sudo apt-get install postgresql postgresql-contrib
sudo service postgresql start
```

**Windows:**
Download from https://www.postgresql.org/download/windows/

#### 2. Create Database

```bash
createdb anandbodh_crm
```

#### 3. Setup Backend

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env`:
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=anandbodh_crm
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key_here
```

#### 4. Run Migrations

```bash
npm run migrate
```

#### 5. Start Backend

```bash
npm run dev
```

Backend runs on `http://localhost:5000`

## API Documentation

### Authentication

#### Register
```bash
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1234567890"
}
```

Response:
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "first_name": "John",
    "last_name": "Doe"
  },
  "token": "jwt_token_here"
}
```

#### Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### Programs

#### Get All Programs
```bash
GET /api/programs
```

#### Create Program (Admin)
```bash
POST /api/programs
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Soleus Activation",
  "slug": "soleus-activation",
  "description": "Activate your soleus muscle",
  "price": 99.99,
  "durationDays": 30,
  "maxParticipants": 100
}
```

### Enrollments

#### Enroll in Program
```bash
POST /api/enrollments
Authorization: Bearer <token>
Content-Type: application/json

{
  "programId": "program-uuid"
}
```

#### Get User Enrollments
```bash
GET /api/users/enrollments
Authorization: Bearer <token>
```

#### Update Progress
```bash
PUT /api/enrollments/:id/progress
Authorization: Bearer <token>
Content-Type: application/json

{
  "progressPercentage": 50
}
```

### Contacts

#### Create Contact (Public)
```bash
POST /api/contacts
Content-Type: application/json

{
  "email": "contact@example.com",
  "firstName": "Jane",
  "lastName": "Smith",
  "phone": "+1234567890",
  "message": "I'm interested in your programs",
  "source": "website"
}
```

#### Get All Contacts (Admin)
```bash
GET /api/contacts
Authorization: Bearer <token>
```

### Analytics

#### Dashboard Stats (Admin)
```bash
GET /api/analytics/dashboard
Authorization: Bearer <token>
```

Response:
```json
{
  "stats": {
    "totalUsers": 150,
    "totalEnrollments": 45,
    "totalContacts": 200,
    "totalRevenue": "4500.00"
  },
  "recentEvents": [...]
}
```

## Frontend Integration

### Install API Client

```bash
npm install axios
```

### Create API Service

```javascript
// src/lib/api.js
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

### Use in Components

```javascript
// src/app/login/page.js
'use client';

import { useState } from 'react';
import api from '@/lib/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      // Redirect to dashboard
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

## Database Schema

### Users
```sql
id (UUID)
email (VARCHAR, unique)
password_hash (VARCHAR)
first_name (VARCHAR)
last_name (VARCHAR)
phone (VARCHAR)
role (VARCHAR) - member, staff, admin
status (VARCHAR) - active, inactive, suspended
profile_data (JSONB)
created_at (TIMESTAMP)
updated_at (TIMESTAMP)
```

### Programs
```sql
id (UUID)
name (VARCHAR)
slug (VARCHAR, unique)
description (TEXT)
price (DECIMAL)
duration_days (INTEGER)
max_participants (INTEGER)
status (VARCHAR)
metadata (JSONB)
created_at (TIMESTAMP)
updated_at (TIMESTAMP)
```

### Enrollments
```sql
id (UUID)
user_id (UUID, FK)
program_id (UUID, FK)
status (VARCHAR) - active, completed, cancelled
progress_percentage (INTEGER)
start_date (TIMESTAMP)
end_date (TIMESTAMP)
payment_status (VARCHAR) - pending, completed, failed
payment_id (VARCHAR)
notes (TEXT)
created_at (TIMESTAMP)
updated_at (TIMESTAMP)
```

## Deployment

### Heroku

```bash
# Create app
heroku create anandbodh-crm

# Add PostgreSQL
heroku addons:create heroku-postgresql:hobby-dev

# Set environment variables
heroku config:set JWT_SECRET=your_secret_key

# Deploy
git push heroku main
```

### AWS

1. Create RDS PostgreSQL instance
2. Create EC2 instance
3. Deploy backend to EC2
4. Update environment variables

### DigitalOcean

```bash
# Create droplet
# Install Node.js and PostgreSQL
# Clone repository
# Setup environment
# Start with PM2

npm install -g pm2
pm2 start server.js --name "anandbodh-crm"
pm2 startup
pm2 save
```

## Security Checklist

- ✅ Passwords hashed with bcrypt
- ✅ JWT for authentication
- ✅ CORS configured
- ✅ Helmet for security headers
- ✅ Input validation
- ✅ SQL injection prevention (parameterized queries)
- ✅ Rate limiting (add express-rate-limit)
- ✅ HTTPS in production

## Monitoring

### Logs

```bash
# View logs
pm2 logs

# View specific app logs
pm2 logs anandbodh-crm
```

### Database

```bash
# Connect to database
psql -U postgres -d anandbodh_crm

# View tables
\dt

# View users
SELECT * FROM users;
```

## Troubleshooting

### Database Connection Error

```bash
# Check PostgreSQL is running
psql -U postgres

# Check environment variables
cat .env

# Verify database exists
psql -U postgres -l
```

### Port Already in Use

```bash
# Find process using port 5000
lsof -i :5000

# Kill process
kill -9 <PID>
```

### JWT Token Issues

```bash
# Verify token
curl -H "Authorization: Bearer <token>" http://localhost:5000/api/users/profile
```

## Next Steps

1. ✅ Backend setup complete
2. Create login/register pages in frontend
3. Create user dashboard
4. Integrate payment processing (Stripe)
5. Add email notifications
6. Setup admin panel
7. Deploy to production

## Support

For issues or questions:
- Check logs: `npm run dev`
- Review API documentation
- Check database schema
- Verify environment variables

---

**Status:** ✅ Ready to use  
**Last Updated:** April 6, 2026
