# Anandbodh Architecture Overview

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND (Next.js)                      │
│                    http://localhost:3000                        │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Pages (59 routes)                                       │  │
│  │  - Homepage, Programs, Blog, Admin Panel, etc.          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                           ↓                                     │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  AuthContext (Supabase Auth)                            │  │
│  │  - Sign up, Login, Logout                               │  │
│  │  - User profiles, Password reset                        │  │
│  └──────────────────────────────────────────────────────────┘  │
│                           ↓                                     │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Supabase Client                                        │  │
│  │  - Authentication                                       │  │
│  │  - Database queries                                     │  │
│  │  - Storage (images)                                     │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
         ↓                                    ↓
    ┌─────────────────────────────────────────────────────────┐
    │              SUPABASE (Cloud Database)                  │
    │         https://app.supabase.com                        │
    │                                                         │
    │  ┌─────────────────────────────────────────────────┐   │
    │  │  PostgreSQL Database                            │   │
    │  │  - auth.users (Supabase managed)               │   │
    │  │  - user_profiles                               │   │
    │  │  - blog_posts                                  │   │
    │  │  - images                                      │   │
    │  │  - programs, enrollments, contacts, etc.       │   │
    │  └─────────────────────────────────────────────────┘   │
    │                                                         │
    │  ┌─────────────────────────────────────────────────┐   │
    │  │  Storage (blog-images bucket)                   │   │
    │  │  - Blog post images                             │   │
    │  │  - Program images                               │   │
    │  │  - User avatars                                 │   │
    │  └─────────────────────────────────────────────────┘   │
    │                                                         │
    │  ┌─────────────────────────────────────────────────┐   │
    │  │  Authentication                                 │   │
    │  │  - Email/Password auth                          │   │
    │  │  - JWT tokens                                   │   │
    │  │  - Session management                           │   │
    │  └─────────────────────────────────────────────────┘   │
    └─────────────────────────────────────────────────────────┘

         ↓
    ┌─────────────────────────────────────────────────────────┐
    │         BACKEND API (Express.js - Optional)             │
    │            http://localhost:5001                        │
    │                                                         │
    │  ┌─────────────────────────────────────────────────┐   │
    │  │  Security Middleware                            │   │
    │  │  - Helmet (security headers)                    │   │
    │  │  - CORS                                         │   │
    │  │  - Rate limiting                                │   │
    │  │  - Input sanitization                           │   │
    │  │  - Input validation                             │   │
    │  │  - Error handling                               │   │
    │  │  - Logging                                      │   │
    │  └─────────────────────────────────────────────────┘   │
    │                                                         │
    │  ┌─────────────────────────────────────────────────┐   │
    │  │  API Routes                                     │   │
    │  │  - /api/auth (register, login, verify)         │   │
    │  │  - /api/users (profile, enrollments)           │   │
    │  │  - /api/programs (CRUD)                        │   │
    │  │  - /api/enrollments (CRUD)                     │   │
    │  │  - /api/contacts (CRUD)                        │   │
    │  │  - /api/emails (send, history)                 │   │
    │  │  - /api/analytics (dashboard, stats)           │   │
    │  │  - /health (health check)                      │   │
    │  └─────────────────────────────────────────────────┘   │
    │                                                         │
    │  ┌─────────────────────────────────────────────────┐   │
    │  │  Database Connection                            │   │
    │  │  - PostgreSQL (Supabase)                        │   │
    │  │  - Connection pooling (max 20)                  │   │
    │  │  - Parameterized queries (SQL injection safe)   │   │
    │  └─────────────────────────────────────────────────┘   │
    └─────────────────────────────────────────────────────────┘
```

---

## 🔄 Data Flow

### User Registration Flow
```
1. User enters email/password in /signin page
2. Frontend calls supabase.auth.signUp()
3. Supabase creates user in auth.users table
4. Frontend creates user_profiles record
5. User receives confirmation email (optional)
6. User can login immediately
```

### User Login Flow
```
1. User enters email/password in /login page
2. Frontend calls supabase.auth.signInWithPassword()
3. Supabase validates credentials
4. Supabase returns JWT token
5. Frontend stores token in AuthContext
6. User redirected to dashboard
```

### Blog Post Creation Flow (Admin)
```
1. Admin goes to /admin/blogs
2. Admin fills blog form
3. Frontend validates input
4. Frontend calls supabase.from('blog_posts').insert()
5. Supabase checks RLS policy (admin only)
6. Blog post stored in database
7. Blog appears in list
```

### Image Upload Flow (Admin)
```
1. Admin goes to /admin/images
2. Admin selects image file
3. Frontend validates file
4. Frontend uploads to Supabase Storage
5. Frontend saves metadata to images table
6. Image appears in gallery
```

---

## 📊 Technology Stack

### Frontend
- **Framework**: Next.js 14+ (React)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Styling**: Custom CSS
- **State Management**: React Context

### Backend (Optional)
- **Framework**: Express.js
- **Database**: PostgreSQL (Supabase)
- **Authentication**: JWT
- **Security**: Helmet, CORS, Rate Limiting
- **Validation**: Express Validator
- **Logging**: Morgan + Custom Logger

### Database
- **Provider**: Supabase (PostgreSQL)
- **Tables**: 4 main tables + Supabase auth
- **Storage**: blog-images bucket
- **RLS**: Row Level Security enabled

---

## 🔐 Security Architecture

### Frontend Security
- ✅ Supabase Auth (email/password)
- ✅ JWT token management
- ✅ Protected routes
- ✅ User context validation
- ✅ HTTPS ready

### Backend Security
- ✅ Helmet.js (HTTP headers)
- ✅ CORS (cross-origin)
- ✅ Rate limiting (memory-based)
- ✅ Input sanitization (XSS prevention)
- ✅ Input validation (data integrity)
- ✅ Error handling (proper responses)
- ✅ Logging (audit trail)
- ✅ Password hashing (bcryptjs)
- ✅ JWT validation
- ✅ Role-based access control

### Database Security
- ✅ RLS policies (row level security)
- ✅ Parameterized queries (SQL injection prevention)
- ✅ Connection pooling
- ✅ Encrypted passwords
- ✅ Secure token storage

---

## 📁 Project Structure

```
anandbodh/
├── frontend/                    # Next.js Frontend
│   ├── src/
│   │   ├── app/                # 59 routes
│   │   ├── components/         # React components
│   │   ├── context/            # AuthContext, StripeContext
│   │   └── lib/                # supabase.js, utilities
│   ├── public/                 # Static assets
│   ├── .env.local              # Frontend env vars
│   └── package.json
│
├── backend-api/                # Express Backend (Optional)
│   ├── middleware/             # Security middleware
│   ├── routes/                 # API routes
│   ├── db/                     # Database schema
│   ├── scripts/                # Migration scripts
│   ├── logs/                   # Log files
│   ├── .env                    # Backend env vars
│   └── server.js               # Express server
│
├── SUPABASE_SCHEMA.sql         # Database schema
├── SUPABASE_ADMIN_SCHEMA.sql   # Admin tables
├── SUPABASE_FIX_COMMANDS.sql   # RLS policy fix
└── Documentation files
```

---

## 🚀 Deployment Architecture

### Frontend Deployment (Vercel)
```
GitHub → Vercel → CDN → Users
- Automatic deployments on push
- Environment variables configured
- HTTPS enabled
- Global edge network
```

### Backend Deployment (Optional)
```
GitHub → Heroku/Railway → Server → Supabase
- Automatic deployments on push
- Environment variables configured
- HTTPS enabled
- Auto-scaling available
```

### Database (Supabase)
```
Supabase Cloud → PostgreSQL → Backups
- Managed PostgreSQL
- Automatic backups
- Point-in-time recovery
- Real-time subscriptions
```

---

## 🔄 API Communication

### Frontend → Supabase
```javascript
// Direct Supabase calls
const { data, error } = await supabase
  .from('blog_posts')
  .select('*')
  .eq('status', 'published');
```

### Frontend → Backend (Optional)
```javascript
// API calls to backend
const response = await fetch('http://localhost:5001/api/users/profile', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

### Backend → Supabase
```javascript
// Backend queries Supabase
const result = await pool.query(
  'SELECT * FROM users WHERE email = $1',
  [email]
);
```

---

## 📊 Database Schema

### Tables
1. **auth.users** (Supabase managed)
   - Email, password, auth metadata

2. **user_profiles**
   - User data, role, status

3. **blog_posts**
   - Blog content, metadata

4. **images**
   - Image metadata, storage path

5. **programs** (optional)
   - Program details

6. **enrollments** (optional)
   - User enrollments

---

## 🔐 Authentication Flow

```
1. User signs up/logs in
2. Supabase Auth validates credentials
3. Supabase returns JWT token
4. Frontend stores token in AuthContext
5. Frontend includes token in API requests
6. Backend validates token
7. Backend checks user role/permissions
8. Backend returns data or error
```

---

## 📈 Scalability

### Frontend
- ✅ Static generation (fast)
- ✅ CDN distribution (global)
- ✅ Auto-scaling (Vercel)

### Backend
- ✅ Connection pooling (efficient)
- ✅ Rate limiting (protection)
- ✅ Auto-scaling (Heroku/Railway)

### Database
- ✅ PostgreSQL (reliable)
- ✅ Indexes (fast queries)
- ✅ Connection pooling (efficient)
- ✅ Backups (data safety)

---

## 🎯 Summary

**Frontend**: Uses Supabase for auth and database
**Backend**: Optional Express API with security features
**Database**: Supabase PostgreSQL with RLS
**Security**: Multi-layer security (frontend, backend, database)
**Scalability**: Ready for production deployment

---

**Status**: ✅ PRODUCTION-READY
**Last Updated**: April 8, 2026
**Version**: 1.0.0

