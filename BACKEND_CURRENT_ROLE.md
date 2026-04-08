# Backend Current Role & Functionality

## Summary

The backend is a **duplicate authentication and data management system** that is **NOT CURRENTLY USED** by your frontend.

---

## What the Backend Currently Does

### 1. **Authentication Routes** (`/api/auth`)
- `POST /register` - Register users (with password hashing)
- `POST /login` - Login users (returns JWT token)
- `GET /verify` - Verify JWT tokens

**Status**: ❌ NOT USED
**Why**: Frontend uses Supabase Auth instead

---

### 2. **User Routes** (`/api/users`)
- Get user profile
- Update user profile
- Get user enrollments

**Status**: ❌ NOT USED
**Why**: Frontend queries Supabase directly

---

### 3. **Program Routes** (`/api/programs`)
- Get all programs
- Get single program
- Create/update/delete programs (admin only)

**Status**: ❌ NOT USED
**Why**: Frontend queries Supabase directly

---

### 4. **Enrollment Routes** (`/api/enrollments`)
- Create enrollment
- Get enrollments
- Update progress
- Cancel enrollment

**Status**: ❌ NOT USED
**Why**: Frontend queries Supabase directly

---

### 5. **Contact Routes** (`/api/contacts`)
- Create contact form submission
- Get contacts (admin only)

**Status**: ❌ NOT USED
**Why**: Frontend queries Supabase directly

---

### 6. **Email Routes** (`/api/emails`)
- Create email campaigns (admin only)
- Get campaigns (admin only)
- Get campaign stats

**Status**: ⚠️ PARTIALLY USEFUL
**Why**: Could be used for email sending, but not implemented yet

---

### 7. **Analytics Routes** (`/api/analytics`)
- Get dashboard analytics
- Get user analytics

**Status**: ❌ NOT USED
**Why**: Frontend queries Supabase directly

---

## Current Architecture

```
Frontend (Next.js)
    ↓
    ├→ Supabase (USED) ✅
    │   - Authentication
    │   - Database queries
    │   - Image storage
    │
    └→ Backend (Express) (NOT USED) ❌
        - Duplicate auth system
        - Duplicate database queries
        - Unused email system
```

---

## Why Backend is NOT Used

1. **Supabase Auth is Better**
   - Built-in authentication
   - Automatic password hashing
   - JWT token management
   - Email confirmation
   - Password reset

2. **Direct Database Access is Faster**
   - No extra network hop
   - RLS policies handle security
   - Real-time capabilities

3. **Frontend Doesn't Call Backend**
   - No API calls to backend
   - All queries go to Supabase
   - Backend is isolated

---

## What Backend COULD Be Used For

If you deployed the backend, it could handle:

✅ **Email Sending**
- Newsletter campaigns
- Notifications
- Password reset emails
- Transactional emails

✅ **Custom Business Logic**
- Complex calculations
- Workflow automation
- Data transformations

✅ **Third-Party Integrations**
- Payment processing
- CRM integrations
- Analytics services

✅ **Admin Operations**
- Bulk operations
- Data exports
- System maintenance

---

## Current Backend Issues

1. **Uses Separate PostgreSQL Database**
   - Not connected to Supabase
   - Duplicate data
   - Inconsistent state

2. **Duplicate Authentication**
   - Backend has its own auth
   - Frontend uses Supabase auth
   - Two different user systems

3. **Not Integrated with Frontend**
   - Frontend doesn't call backend
   - Backend routes are unused
   - Wasted resources

---

## Recommendation

### Option 1: Remove Backend (RECOMMENDED)
- Delete `backend-api/` folder
- Deploy only frontend
- Simpler, faster, cheaper
- No maintenance overhead

### Option 2: Keep Backend for Future Use
- Don't deploy yet
- Use when you need:
  - Email sending
  - Custom logic
  - Third-party integrations
- Update to use Supabase instead of PostgreSQL

### Option 3: Integrate Backend with Supabase
- Update backend to use Supabase client
- Remove PostgreSQL dependency
- Use for email sending and custom logic
- Deploy alongside frontend

---

## If You Want to Use Backend Later

### Step 1: Update Backend to Use Supabase

Replace PostgreSQL with Supabase in `server.js`:

```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Use supabase instead of pool
// Example: supabase.from('users').select('*')
```

### Step 2: Update All Routes

Convert all routes from PostgreSQL queries to Supabase queries:

```javascript
// Before (PostgreSQL)
const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);

// After (Supabase)
const { data, error } = await supabase
  .from('users')
  .select('*')
  .eq('id', userId)
  .single();
```

### Step 3: Add Email Functionality

Implement email sending using Nodemailer:

```javascript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Send email
await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: userEmail,
  subject: 'Welcome to Anandbodh',
  html: '<h1>Welcome!</h1>'
});
```

### Step 4: Deploy

```bash
# Deploy to Render/Railway
npm run build
npm start
```

---

## Decision Matrix

| Aspect | Remove Backend | Keep for Later | Integrate Now |
|--------|---|---|---|
| Complexity | Low | Low | Medium |
| Cost | Lower | Same | Higher |
| Deployment | Faster | N/A | Slower |
| Features | Limited | Expandable | Full |
| Maintenance | None | None | Moderate |

---

## My Recommendation

**For now: Remove or ignore the backend**

Your frontend + Supabase is production-ready. The backend is:
- Not used by frontend
- Not needed for current features
- Adds unnecessary complexity
- Wastes resources

**Deploy only the frontend to Vercel.**

If you later need email sending or custom logic, we can:
1. Update backend to use Supabase
2. Implement email functionality
3. Deploy backend to Render/Railway

---

## Summary

| Component | Status | Used? | Needed? |
|-----------|--------|-------|---------|
| Frontend | ✅ Ready | Yes | Yes |
| Supabase | ✅ Ready | Yes | Yes |
| Backend | ⚠️ Unused | No | No (for now) |

**Action**: Deploy frontend only. Backend is optional.

---

**Last Updated**: April 8, 2026
