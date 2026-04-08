# Backend Security Implementation Guide

## 🔒 Security Features Implemented

### 1. **Helmet.js** - HTTP Security Headers
- Protects against common vulnerabilities
- Sets security headers automatically
- Prevents clickjacking, XSS, MIME sniffing

```javascript
app.use(helmet());
```

### 2. **CORS** - Cross-Origin Resource Sharing
- Restricts API access to authorized domains
- Configurable origin, methods, and headers
- Prevents unauthorized cross-origin requests

```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

### 3. **Rate Limiting** - Prevent Brute Force & DDoS
- General API limiter: 100 requests per 15 minutes
- Auth limiter: 5 requests per 15 minutes
- Strict limiter: 10 requests per hour
- Memory-based store (no external dependencies)

```javascript
import { apiLimiter, authLimiter, strictLimiter } from './middleware/rateLimiter.js';

app.use(apiLimiter); // Apply to all routes
app.post('/api/auth/login', authLimiter, loginHandler); // Strict for auth
```

### 4. **Input Sanitization** - Prevent XSS & Injection
- Removes HTML tags and dangerous characters
- Sanitizes strings, emails, phone numbers
- Recursive object sanitization
- Uses DOMPurify for XSS prevention

```javascript
import { sanitizeMiddleware, sanitizeString, sanitizeEmail } from './middleware/sanitizer.js';

app.use(sanitizeMiddleware); // Sanitize all inputs
```

### 5. **Input Validation** - Ensure Data Integrity
- Email validation and normalization
- Password strength requirements
- Length and format validation
- Custom validation rules

```javascript
import { authValidators, handleValidationErrors } from './middleware/validators.js';

router.post('/register', authValidators.register, handleValidationErrors, registerHandler);
```

### 6. **Authentication** - JWT-based Auth
- Secure token generation
- Token expiration
- Bearer token validation
- User context in requests

```javascript
import { authenticateToken } from './middleware/auth.js';

router.get('/profile', authenticateToken, getProfileHandler);
```

### 7. **Authorization** - Role-based Access Control
- Admin-only endpoints
- User-specific data access
- Role verification

```javascript
if (req.user.role !== 'admin') {
  return res.status(403).json({ error: 'Unauthorized' });
}
```

### 8. **Password Security** - Bcrypt Hashing
- Bcryptjs for password hashing
- Salt rounds: 10
- Never store plain text passwords

```javascript
import bcrypt from 'bcryptjs';

const hashedPassword = await bcrypt.hash(password, 10);
const passwordMatch = await bcrypt.compare(password, hashedPassword);
```

### 9. **Logging** - Security Audit Trail
- Request/response logging
- Error logging with stack traces
- User action tracking
- File-based log storage

```javascript
import { logger } from './middleware/logger.js';

logger.info('User login', { userId: user.id, email: user.email });
logger.error('Failed login attempt', { email, ip: req.ip });
```

### 10. **Error Handling** - Secure Error Messages
- Custom error classes
- Production vs development error details
- No sensitive information in responses
- Proper HTTP status codes

```javascript
import { AppError, ValidationError, AuthenticationError } from './middleware/errorHandler.js';

throw new ValidationError('Invalid email', errors);
throw new AuthenticationError('Invalid credentials');
```

### 11. **Payload Size Limits** - Prevent Large Attacks
- JSON payload limit: 10KB
- URL-encoded payload limit: 10KB
- Prevents memory exhaustion

```javascript
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
```

### 12. **Database Connection Pooling**
- Connection pool size: 20
- Idle timeout: 30 seconds
- Connection timeout: 2 seconds
- Prevents connection exhaustion

```javascript
const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

---

## 📋 Security Checklist

### Authentication & Authorization
- [x] JWT-based authentication
- [x] Password hashing with bcryptjs
- [x] Token expiration
- [x] Role-based access control
- [x] Protected endpoints

### Input Security
- [x] Input sanitization (XSS prevention)
- [x] Input validation (format, length, type)
- [x] Email normalization
- [x] Phone number validation
- [x] SQL injection prevention (parameterized queries)

### Network Security
- [x] HTTPS ready (Helmet)
- [x] CORS configuration
- [x] Rate limiting
- [x] Payload size limits
- [x] Security headers

### Data Security
- [x] Password hashing
- [x] Secure token generation
- [x] No sensitive data in logs
- [x] Database connection pooling
- [x] Error message sanitization

### Monitoring & Logging
- [x] Request logging
- [x] Error logging
- [x] User action tracking
- [x] Security event logging
- [x] File-based log storage

---

## 🚀 Usage Examples

### 1. Register with Validation
```javascript
import { authValidators, handleValidationErrors } from './middleware/validators.js';

router.post('/register', 
  authValidators.register,
  handleValidationErrors,
  async (req, res, next) => {
    try {
      // Handler code
    } catch (error) {
      next(error);
    }
  }
);
```

### 2. Protected Route with Auth
```javascript
import { authenticateToken } from './middleware/auth.js';

router.get('/profile',
  authenticateToken,
  async (req, res, next) => {
    try {
      const userId = req.user.userId;
      // Handler code
    } catch (error) {
      next(error);
    }
  }
);
```

### 3. Admin-Only Route
```javascript
router.get('/admin/users',
  authenticateToken,
  async (req, res, next) => {
    try {
      if (req.user.role !== 'admin') {
        throw new AuthorizationError('Admin access required');
      }
      // Handler code
    } catch (error) {
      next(error);
    }
  }
);
```

### 4. Rate Limited Auth Endpoint
```javascript
import { authLimiter } from './middleware/rateLimiter.js';

router.post('/login',
  authLimiter,
  authValidators.login,
  handleValidationErrors,
  async (req, res, next) => {
    try {
      // Handler code
    } catch (error) {
      next(error);
    }
  }
);
```

### 5. Logging Security Events
```javascript
import { logger } from './middleware/logger.js';

logger.info('User login successful', {
  userId: user.id,
  email: user.email,
  ip: req.ip,
  timestamp: new Date()
});

logger.warn('Failed login attempt', {
  email: req.body.email,
  ip: req.ip,
  attempts: loginAttempts
});

logger.error('Database error', {
  error: err.message,
  query: 'SELECT * FROM users',
  userId: req.user?.userId
});
```

---

## 🔐 Environment Variables

```env
# Security
JWT_SECRET=your_very_secure_secret_key_min_32_chars
JWT_EXPIRE=7d

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=anandbodh
DB_USER=postgres
DB_PASSWORD=secure_password

# CORS
FRONTEND_URL=http://localhost:3000

# Logging
LOG_LEVEL=info
NODE_ENV=production
```

---

## 📊 Middleware Stack Order

```
1. Helmet (Security headers)
2. CORS (Cross-origin)
3. Morgan (HTTP logging)
4. Request Logger (Custom logging)
5. Body Parser (JSON/URL-encoded)
6. Sanitizer (Input sanitization)
7. Rate Limiter (Prevent abuse)
8. Routes (API endpoints)
9. 404 Handler (Not found)
10. Error Handler (Global error handling)
```

---

## 🛡️ Best Practices

### 1. Always Use Async/Await with Try-Catch
```javascript
router.post('/endpoint', async (req, res, next) => {
  try {
    // Code here
  } catch (error) {
    next(error); // Pass to error handler
  }
});
```

### 2. Validate All Inputs
```javascript
import { body, validationResult } from 'express-validator';

router.post('/endpoint', [
  body('email').isEmail(),
  body('password').isLength({ min: 8 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Process request
});
```

### 3. Use Parameterized Queries
```javascript
// ✅ Good - Prevents SQL injection
const result = await pool.query(
  'SELECT * FROM users WHERE email = $1',
  [email]
);

// ❌ Bad - Vulnerable to SQL injection
const result = await pool.query(
  `SELECT * FROM users WHERE email = '${email}'`
);
```

### 4. Never Log Sensitive Data
```javascript
// ✅ Good
logger.info('User login', { userId: user.id, email: user.email });

// ❌ Bad
logger.info('User login', { user }); // Contains password hash
```

### 5. Use Proper Error Classes
```javascript
// ✅ Good
throw new ValidationError('Invalid email', errors);
throw new AuthenticationError('Invalid credentials');
throw new AuthorizationError('Admin access required');

// ❌ Bad
throw new Error('Something went wrong');
```

---

## 🔍 Security Testing

### Test Rate Limiting
```bash
# Should succeed
curl http://localhost:5001/health

# Should fail after 5 attempts
for i in {1..10}; do
  curl -X POST http://localhost:5001/api/auth/login \
    -H "Content-Type: application/json" \
    -d '{"email":"test@test.com","password":"test"}'
done
```

### Test Input Sanitization
```bash
# Should sanitize HTML
curl -X POST http://localhost:5001/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"<script>alert(1)</script>","email":"test@test.com"}'
```

### Test Authentication
```bash
# Should fail without token
curl http://localhost:5001/api/users/profile

# Should succeed with token
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:5001/api/users/profile
```

---

## 📝 Logging Locations

- **Error logs**: `backend-api/logs/error.log`
- **Warning logs**: `backend-api/logs/warn.log`
- **Info logs**: `backend-api/logs/info.log`
- **Debug logs**: `backend-api/logs/debug.log` (development only)

---

## 🚀 Deployment Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Use strong `JWT_SECRET` (min 32 characters)
- [ ] Enable HTTPS
- [ ] Configure CORS for production domain
- [ ] Set up Redis for rate limiting (optional)
- [ ] Configure database backups
- [ ] Set up log rotation
- [ ] Monitor error logs
- [ ] Enable security headers
- [ ] Test all security features

---

## 📞 Support

For security issues or questions:
1. Check logs in `backend-api/logs/`
2. Review error messages
3. Test with curl or Postman
4. Check environment variables
5. Verify database connection

---

**Status**: ✅ All security features implemented
**Last Updated**: April 8, 2026
**Version**: 1.0.0

