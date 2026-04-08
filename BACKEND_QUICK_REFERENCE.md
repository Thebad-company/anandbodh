# Backend Quick Reference Guide

## 🚀 Quick Start

### Install & Run
```bash
cd backend-api
npm install
npm start
# Backend running on http://localhost:5001
```

### Test Health
```bash
curl http://localhost:5001/health
```

---

## 🔐 Security Features at a Glance

| Feature | Status | File |
|---------|--------|------|
| Logging | ✅ | `middleware/logger.js` |
| Sanitization | ✅ | `middleware/sanitizer.js` |
| Rate Limiting | ✅ | `middleware/rateLimiter.js` |
| Validation | ✅ | `middleware/validators.js` |
| Error Handling | ✅ | `middleware/errorHandler.js` |
| Authentication | ✅ | `middleware/auth.js` |
| Security Headers | ✅ | `server.js` (Helmet) |
| CORS | ✅ | `server.js` |
| Password Hashing | ✅ | `routes/auth.js` (bcryptjs) |
| SQL Injection Prevention | ✅ | All routes (parameterized queries) |

---

## 📝 Common Code Patterns

### 1. Protected Route
```javascript
import { authenticateToken } from './middleware/auth.js';

router.get('/profile', authenticateToken, async (req, res, next) => {
  try {
    const userId = req.user.userId;
    // Your code
  } catch (error) {
    next(error);
  }
});
```

### 2. Validated Route
```javascript
import { authValidators, handleValidationErrors } from './middleware/validators.js';

router.post('/register',
  authValidators.register,
  handleValidationErrors,
  async (req, res, next) => {
    try {
      // Your code
    } catch (error) {
      next(error);
    }
  }
);
```

### 3. Rate Limited Route
```javascript
import { authLimiter } from './middleware/rateLimiter.js';

router.post('/login', authLimiter, async (req, res, next) => {
  try {
    // Your code
  } catch (error) {
    next(error);
  }
});
```

### 4. Admin-Only Route
```javascript
router.get('/admin/users', authenticateToken, async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      throw new AuthorizationError('Admin access required');
    }
    // Your code
  } catch (error) {
    next(error);
  }
});
```

### 5. Logging
```javascript
import { logger } from './middleware/logger.js';

logger.info('User action', { userId: user.id, action: 'login' });
logger.error('Database error', { error: err.message });
logger.warn('Suspicious activity', { ip: req.ip, attempts: 5 });
```

---

## 🔑 Environment Variables

```env
# Required
NODE_ENV=development
PORT=5001
JWT_SECRET=your_secure_key_min_32_chars
DB_HOST=localhost
DB_PORT=5432
DB_NAME=anandbodh
DB_USER=postgres
DB_PASSWORD=postgres

# Optional
FRONTEND_URL=http://localhost:3000
REDIS_HOST=localhost
REDIS_PORT=6379
LOG_LEVEL=info
```

---

## 📊 API Endpoints

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/verify` - Verify token

### Users
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `GET /api/users/enrollments` - Get enrollments

### Programs
- `GET /api/programs` - Get all programs
- `POST /api/programs` - Create program (admin)
- `GET /api/programs/:id` - Get program
- `PUT /api/programs/:id` - Update program (admin)
- `DELETE /api/programs/:id` - Delete program (admin)

### Enrollments
- `GET /api/enrollments` - Get enrollments
- `POST /api/enrollments` - Create enrollment
- `GET /api/enrollments/:id` - Get enrollment
- `PUT /api/enrollments/:id` - Update enrollment
- `DELETE /api/enrollments/:id` - Delete enrollment

### Contacts
- `GET /api/contacts` - Get contacts (admin)
- `POST /api/contacts` - Create contact
- `GET /api/contacts/:id` - Get contact
- `DELETE /api/contacts/:id` - Delete contact (admin)

### Emails
- `POST /api/emails/send` - Send email
- `GET /api/emails/history` - Email history (admin)

### Analytics
- `GET /api/analytics/dashboard` - Dashboard stats (admin)
- `GET /api/analytics/users` - User analytics (admin)
- `GET /api/analytics/revenue` - Revenue analytics (admin)

---

## 🛡️ Security Headers

Automatically set by Helmet:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Strict-Transport-Security: max-age=31536000`
- `Content-Security-Policy: default-src 'self'`

---

## 📊 Rate Limits

| Endpoint | Limit | Window |
|----------|-------|--------|
| General API | 100 | 15 min |
| Auth (login) | 5 | 15 min |
| Moderate | 30 | 15 min |
| Strict | 10 | 1 hour |

---

## 🔍 Logging Locations

```
backend-api/logs/
├── error.log      # Errors only
├── warn.log       # Warnings
├── info.log       # Info messages
└── debug.log      # Debug (dev only)
```

---

## ✅ Validation Rules

### Email
- Must be valid email format
- Normalized to lowercase

### Password
- Minimum 8 characters
- Must contain uppercase letter
- Must contain lowercase letter
- Must contain number
- Must contain special character (@$!%*?&)

### Phone
- Valid mobile phone format
- Digits, +, and - only

### Names
- Maximum 50 characters
- Trimmed

### Text Fields
- Maximum length varies by field
- Trimmed
- HTML tags removed

---

## 🚨 Error Responses

### Validation Error (400)
```json
{
  "status": "error",
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email address"
    }
  ]
}
```

### Authentication Error (401)
```json
{
  "status": "error",
  "message": "Invalid credentials"
}
```

### Authorization Error (403)
```json
{
  "status": "error",
  "message": "Admin access required"
}
```

### Not Found Error (404)
```json
{
  "status": "error",
  "message": "Resource not found"
}
```

### Rate Limit Error (429)
```json
{
  "status": "error",
  "message": "Too many requests, please try again later"
}
```

### Server Error (500)
```json
{
  "status": "error",
  "message": "Internal server error"
}
```

---

## 🧪 Testing with cURL

### Register
```bash
curl -X POST http://localhost:5001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePass123!",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

### Login
```bash
curl -X POST http://localhost:5001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePass123!"
  }'
```

### Protected Route
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:5001/api/users/profile
```

### Create Contact
```bash
curl -X POST http://localhost:5001/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Inquiry",
    "message": "I have a question..."
  }'
```

---

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5001
lsof -ti:5001 | xargs kill -9
npm start
```

### Database Connection Error
- Check DB_HOST, DB_PORT, DB_NAME
- Verify PostgreSQL is running
- Check DB_USER and DB_PASSWORD

### JWT Secret Error
- Set JWT_SECRET in .env
- Minimum 32 characters recommended

### Rate Limit Issues
- Check Redis connection (optional)
- Falls back to memory store if Redis unavailable

### Validation Errors
- Check input format
- Verify required fields
- Check field lengths

---

## 📈 Performance Tips

1. **Use Connection Pooling** - Already configured (max 20)
2. **Limit Payload Size** - Set to 10KB
3. **Enable Caching** - Add Redis for rate limiting
4. **Monitor Logs** - Check logs/ directory
5. **Use Indexes** - On frequently queried columns

---

## 🔐 Security Checklist

- [x] Helmet enabled
- [x] CORS configured
- [x] Rate limiting enabled
- [x] Input sanitization enabled
- [x] Input validation enabled
- [x] Password hashing enabled
- [x] JWT authentication enabled
- [x] Error handling configured
- [x] Logging enabled
- [x] Payload limits set

---

## 📚 Documentation Files

- **BACKEND_SECURITY.md** - Detailed security guide
- **BACKEND_ENHANCEMENTS.md** - Feature enhancements
- **BACKEND_QUICK_REFERENCE.md** - This file
- **backend-api/README.md** - Backend overview

---

## 🎯 Next Steps

1. Install dependencies: `npm install`
2. Configure .env file
3. Start backend: `npm start`
4. Test endpoints with cURL
5. Check logs in `backend-api/logs/`
6. Deploy to production

---

**Status**: ✅ Production-ready
**Last Updated**: April 8, 2026
**Version**: 1.0.0

