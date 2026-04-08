# Anandbodh - Visual Tech Stack Overview

## 🎨 Frontend Stack

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (Next.js)                       │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Pages (59 Routes)                                   │  │
│  │  ├── Homepage                                        │  │
│  │  ├── Programs (5)                                    │  │
│  │  ├── Blog (10)                                       │  │
│  │  ├── Admin Panel (9)                                 │  │
│  │  ├── Auth (4)                                        │  │
│  │  ├── User (5)                                        │  │
│  │  ├── Community (6)                                   │  │
│  │  └── Other (15)                                      │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ↓                                 │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Components (20+)                                    │  │
│  │  ├── Navbar, Footer                                  │  │
│  │  ├── Cards (Program, Blog)                           │  │
│  │  ├── Forms (Login, Register)                         │  │
│  │  ├── Modals, Icons                                   │  │
│  │  └── 15+ other components                            │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ↓                                 │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Context (State Management)                          │  │
│  │  ├── AuthContext                                     │  │
│  │  │   ├── User state                                  │  │
│  │  │   ├── Login/Signup                                │  │
│  │  │   ├── Logout                                      │  │
│  │  │   └── Profile management                          │  │
│  │  │                                                   │  │
│  │  └── StripeContext                                   │  │
│  │      ├── Payment processing                          │  │
│  │      ├── Subscription management                     │  │
│  │      └── Invoice handling                            │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ↓                                 │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Libraries & Tools                                   │  │
│  │  ├── React 18+                                       │  │
│  │  ├── Supabase JS Client                              │  │
│  │  ├── Fetch API                                       │  │
│  │  ├── Custom CSS                                      │  │
│  │  └── Next.js utilities                               │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 Backend Stack

```
┌─────────────────────────────────────────────────────────────┐
│                  BACKEND (Express.js)                       │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Security Middleware                                 │  │
│  │  ├── Helmet.js (HTTP headers)                        │  │
│  │  ├── CORS (cross-origin)                             │  │
│  │  ├── Rate Limiting (memory-based)                    │  │
│  │  ├── Input Sanitization (XSS prevention)             │  │
│  │  ├── Input Validation (data integrity)               │  │
│  │  ├── Error Handling (proper responses)               │  │
│  │  ├── Logging (Morgan + Custom)                       │  │
│  │  └── JWT Authentication                              │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ↓                                 │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  API Routes (7 Modules, 30+ Endpoints)               │  │
│  │  ├── /api/auth (register, login, verify)             │  │
│  │  ├── /api/users (profile, enrollments)               │  │
│  │  ├── /api/programs (CRUD)                            │  │
│  │  ├── /api/enrollments (CRUD)                         │  │
│  │  ├── /api/contacts (CRUD)                            │  │
│  │  ├── /api/emails (send, history)                     │  │
│  │  ├── /api/analytics (dashboard, stats)               │  │
│  │  └── /health (health check)                          │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ↓                                 │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Database Connection                                 │  │
│  │  ├── Connection Pooling (max 20)                     │  │
│  │  ├── Parameterized Queries (SQL injection safe)      │  │
│  │  ├── Error Handling                                  │  │
│  │  └── Idle Timeout Management                         │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ↓                                 │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Libraries & Tools                                   │  │
│  │  ├── Express.js 4.18+                                │  │
│  │  ├── Node.js                                         │  │
│  │  ├── PostgreSQL driver (pg)                          │  │
│  │  ├── JWT (jsonwebtoken)                              │  │
│  │  ├── bcryptjs (password hashing)                     │  │
│  │  ├── express-validator                               │  │
│  │  ├── isomorphic-dompurify                            │  │
│  │  ├── express-rate-limit                              │  │
│  │  ├── Morgan (logging)                                │  │
│  │  └── Nodemailer (email)                              │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 💾 Database Stack

```
┌─────────────────────────────────────────────────────────────┐
│              DATABASE (Supabase PostgreSQL)                 │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Tables (7)                                          │  │
│  │  ├── auth.users (Supabase managed)                   │  │
│  │  │   ├── id, email, password                         │  │
│  │  │   ├── created_at, updated_at                      │  │
│  │  │   └── user_metadata                               │  │
│  │  │                                                   │  │
│  │  ├── user_profiles                                   │  │
│  │  │   ├── id, email, first_name, last_name           │  │
│  │  │   ├── phone, role, status                         │  │
│  │  │   └── profile_data                                │  │
│  │  │                                                   │  │
│  │  ├── blog_posts                                      │  │
│  │  │   ├── id, title, slug, content                    │  │
│  │  │   ├── author_id, category, tags                   │  │
│  │  │   ├── status, published_at                        │  │
│  │  │   └── created_at, updated_at                      │  │
│  │  │                                                   │  │
│  │  ├── images                                          │  │
│  │  │   ├── id, title, description                      │  │
│  │  │   ├── image_url, storage_path                     │  │
│  │  │   ├── alt_text, category, tags                    │  │
│  │  │   └── uploaded_by, created_at                     │  │
│  │  │                                                   │  │
│  │  ├── programs                                        │  │
│  │  │   ├── id, name, slug, description                 │  │
│  │  │   ├── price, duration, status                     │  │
│  │  │   └── created_at, updated_at                      │  │
│  │  │                                                   │  │
│  │  ├── enrollments                                     │  │
│  │  │   ├── id, user_id, program_id                     │  │
│  │  │   ├── status, progress                            │  │
│  │  │   └── created_at, updated_at                      │  │
│  │  │                                                   │  │
│  │  └── contacts                                        │  │
│  │      ├── id, name, email, phone                      │  │
│  │      ├── subject, message, status                    │  │
│  │      └── created_at                                  │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ↓                                 │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Security & Features                                 │  │
│  │  ├── RLS Policies (row-level security)               │  │
│  │  ├── Indexes (performance)                           │  │
│  │  ├── JWT Authentication                              │  │
│  │  ├── Encrypted Passwords                             │  │
│  │  ├── Automatic Backups                               │  │
│  │  ├── Real-time Subscriptions                         │  │
│  │  └── Multi-region Replication                        │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ↓                                 │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Storage                                             │  │
│  │  └── blog-images (public bucket)                     │  │
│  │      ├── Blog post images                            │  │
│  │      ├── Program images                              │  │
│  │      └── User avatars                                │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🏗️ Complete System Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│                    USER BROWSER                                     │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│                  FRONTEND (Next.js)                                 │
│              http://localhost:3000                                  │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  Pages (59 routes)                                         │    │
│  │  Components (20+)                                          │    │
│  │  Context (Auth, Stripe)                                    │    │
│  │  Supabase Client                                           │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
         ↓                                          ↓
┌──────────────────────────────────┐  ┌──────────────────────────────┐
│                                  │  │                              │
│   SUPABASE (Cloud Database)      │  │  BACKEND (Express.js)        │
│   https://qasiwqxwklsclfhpsouo   │  │  http://localhost:5001       │
│   .supabase.co                   │  │                              │
│                                  │  │  ┌──────────────────────┐   │
│  ┌──────────────────────────┐    │  │  │  Security Middleware │   │
│  │  PostgreSQL Database     │    │  │  │  - Helmet            │   │
│  │  ├── 7 tables            │    │  │  │  - CORS              │   │
│  │  ├── RLS policies        │    │  │  │  - Rate Limiting     │   │
│  │  ├── Indexes             │    │  │  │  - Sanitization      │   │
│  │  └── Backups             │    │  │  │  - Validation        │   │
│  └──────────────────────────┘    │  │  └──────────────────────┘   │
│                                  │  │                              │
│  ┌──────────────────────────┐    │  │  ┌──────────────────────┐   │
│  │  Authentication (JWT)    │    │  │  │  API Routes (30+)    │   │
│  │  - Email/password auth   │    │  │  │  - Auth              │   │
│  │  - Session management    │    │  │  │  - Users             │   │
│  │  - Token generation      │    │  │  │  - Programs          │   │
│  └──────────────────────────┘    │  │  │  - Enrollments       │   │
│                                  │  │  │  - Contacts          │   │
│  ┌──────────────────────────┐    │  │  │  - Emails            │   │
│  │  Storage (S3-compatible) │    │  │  │  - Analytics         │   │
│  │  - blog-images bucket    │    │  │  │  - Health            │   │
│  │  - Public/private access │    │  │  └──────────────────────┘   │
│  └──────────────────────────┘    │  │                              │
│                                  │  │  ┌──────────────────────┐   │
│                                  │  │  │  Database Connection │   │
│                                  │  │  │  - Connection pool   │   │
│                                  │  │  │  - Parameterized     │   │
│                                  │  │  │  - Error handling    │   │
│                                  │  │  └──────────────────────┘   │
│                                  │  │                              │
└──────────────────────────────────┘  └──────────────────────────────┘
```

---

## 📊 Technology Breakdown

### By Layer

```
Presentation Layer (Frontend)
├── Next.js 14+
├── React 18+
├── Custom CSS
└── Supabase JS Client

Business Logic Layer (Backend - Optional)
├── Express.js
├── Node.js
├── Security Middleware
└── API Routes

Data Access Layer
├── PostgreSQL Driver
├── Parameterized Queries
└── Connection Pooling

Database Layer
├── Supabase (PostgreSQL)
├── RLS Policies
├── Indexes
└── Storage

Authentication Layer
├── Supabase Auth
├── JWT Tokens
├── Password Hashing
└── Session Management
```

### By Responsibility

```
Frontend Responsibilities
├── User Interface
├── User Interactions
├── Form Validation
├── State Management
├── Direct Supabase Queries
└── Error Handling

Backend Responsibilities (Optional)
├── Complex Business Logic
├── Third-party Integrations
├── Sensitive Operations
├── Request Validation
├── Rate Limiting
├── Logging
└── Security Headers

Database Responsibilities
├── Data Storage
├── Authentication
├── Authorization (RLS)
├── Data Integrity
├── Backups
└── Real-time Updates
```

---

## 🔐 Security Layers

```
Layer 1: Frontend
├── Supabase Auth
├── JWT Token Management
├── Protected Routes
└── Form Validation

Layer 2: Backend (Optional)
├── Helmet.js (Security Headers)
├── CORS (Cross-origin)
├── Rate Limiting
├── Input Sanitization
├── Input Validation
└── Error Handling

Layer 3: Database
├── RLS Policies
├── Parameterized Queries
├── Connection Pooling
├── Encrypted Passwords
└── Secure Token Storage
```

---

## 📈 Data Flow

```
User Input
    ↓
Frontend Validation
    ↓
Supabase Client
    ↓
Supabase API
    ↓
RLS Policy Check
    ↓
PostgreSQL Query
    ↓
Database
    ↓
Response
    ↓
Frontend Display
```

---

## ✅ Summary

**Frontend**: Next.js + React + Supabase Client
**Backend**: Express.js + Node.js (Optional)
**Database**: Supabase (PostgreSQL)
**Security**: Multi-layer (Frontend, Backend, Database)
**Status**: Production-ready

---

**Last Updated**: April 8, 2026
**Version**: 1.0.0

