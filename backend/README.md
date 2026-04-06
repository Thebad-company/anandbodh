# Anandbodh CRM Backend

Custom CRM backend for the Anandbodh wellness platform built with Node.js, Express, and PostgreSQL.

## Features

- ✅ User authentication (register, login, JWT)
- ✅ Program management
- ✅ Enrollment tracking
- ✅ Contact management
- ✅ Email campaigns
- ✅ Analytics dashboard
- ✅ Role-based access control (member, staff, admin)

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL
- **Authentication:** JWT + bcrypt
- **Validation:** express-validator
- **Email:** Nodemailer
- **Payments:** Stripe (optional)

## Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3. Setup Database

```bash
# Create PostgreSQL database
createdb anandbodh_crm

# Run migrations
npm run migrate
```

### 4. Start Server

```bash
# Development
npm run dev

# Production
npm start
```

Server runs on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/verify` - Verify token

### Users
- `GET /api/users` - Get all users (admin)
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `GET /api/users/enrollments` - Get user enrollments

### Programs
- `GET /api/programs` - Get all programs
- `GET /api/programs/:id` - Get program details
- `POST /api/programs` - Create program (admin)
- `PUT /api/programs/:id` - Update program (admin)

### Enrollments
- `POST /api/enrollments` - Enroll in program
- `GET /api/enrollments/:id` - Get enrollment details
- `PUT /api/enrollments/:id/progress` - Update progress
- `PUT /api/enrollments/:id/cancel` - Cancel enrollment

### Contacts
- `POST /api/contacts` - Create contact (public)
- `GET /api/contacts` - Get all contacts (admin)
- `PUT /api/contacts/:id` - Update contact (admin)

### Email Campaigns
- `POST /api/emails/campaigns` - Create campaign (admin)
- `GET /api/emails/campaigns` - Get campaigns (admin)
- `GET /api/emails/campaigns/:id/stats` - Get campaign stats (admin)

### Analytics
- `POST /api/analytics/events` - Track event
- `GET /api/analytics/dashboard` - Dashboard stats (admin)
- `GET /api/analytics/growth` - User growth (admin)

## Database Schema

### Users
- id, email, password_hash, first_name, last_name, phone, role, status, profile_data

### Programs
- id, name, slug, description, price, duration_days, max_participants, status, metadata

### Enrollments
- id, user_id, program_id, status, progress_percentage, start_date, end_date, payment_status

### Contacts
- id, email, first_name, last_name, phone, message, source, status, tags

### Email Campaigns
- id, name, subject, content, recipient_type, status, scheduled_at, sent_at, open_count, click_count

### Analytics Events
- id, user_id, event_type, event_data, created_at

## Authentication

All protected endpoints require JWT token in Authorization header:

```
Authorization: Bearer <token>
```

## Roles

- **member** - Regular user
- **staff** - Staff member
- **admin** - Administrator

## Development

### Database Migrations

```bash
npm run migrate
```

### Seed Data

```bash
npm run seed
```

### Testing

```bash
npm test
```

## Deployment

### Heroku

```bash
heroku create anandbodh-crm
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
```

### Docker

```bash
docker build -t anandbodh-crm .
docker run -p 5000:5000 anandbodh-crm
```

## Environment Variables

See `.env.example` for all required variables.

## Security

- Passwords hashed with bcrypt
- JWT for authentication
- CORS enabled
- Helmet for security headers
- Input validation with express-validator

## License

MIT

## Support

For issues or questions, contact support@anandbodh.com
