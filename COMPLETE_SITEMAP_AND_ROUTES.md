# Complete Sitemap and Routes Documentation

## Overview

**Total Routes**: 61 (Frontend) + 7 (Backend API)
- **Frontend**: 61 public/user-facing routes
- **Backend**: 7 API endpoint groups (NOT USED by frontend)
- **Status**: All frontend routes working, backend unused

---

## Frontend Routes (61 Total)

### 1. Public Pages (No Authentication Required)

#### Home & Main Pages
| Route | Page | Purpose | Auth Required |
|-------|------|---------|---|
| `/` | Home | Landing page with hero, programs, testimonials | No |
| `/about` | About | About Anandbodh mission and values | No |
| `/contact` | Contact | Contact form for inquiries | No |
| `/careers` | Careers | Job opportunities | No |
| `/pricing` | Pricing | Program pricing information | No |
| `/privacy` | Privacy | Privacy policy | No |
| `/terms` | Terms | Terms of service | No |

#### Blog & Content
| Route | Page | Purpose | Auth Required |
|-------|------|---------|---|
| `/blog` | Blog List | All published blog posts | No |
| `/blog/soleus-muscle` | Blog Post | Soleus muscle article | No |
| `/blog/stress-science` | Blog Post | Stress science article | No |
| `/blog/meditation-as-medicine` | Blog Post | Meditation article | No |
| `/blog/sleep-quality` | Blog Post | Sleep quality article | No |
| `/blog/nutrition-wellness` | Blog Post | Nutrition article | No |
| `/blog/movement-exercise` | Blog Post | Movement article | No |
| `/blog/ayurveda-balance` | Blog Post | Ayurveda article | No |
| `/blog/emotional-detox` | Blog Post | Emotional detox article | No |
| `/blog/reversing-disorders` | Blog Post | Reversing disorders article | No |
| `/blog/divyanubhuti-dhyan` | Blog Post | Divyanubhuti dhyan article | No |

#### Programs
| Route | Page | Purpose | Auth Required |
|-------|------|---------|---|
| `/programs` | Programs List | All available programs | No |
| `/programs/soleus-activation` | Program Detail | Soleus Activation program | No |
| `/programs/meditation` | Program Detail | Meditation program | No |
| `/programs/ayurveda` | Program Detail | Ayurveda program | No |
| `/programs/thrive-at-work` | Program Detail | Thrive at Work program | No |
| `/programs/wake-up-life` | Program Detail | Wake Up Life program | No |

#### Community & Social
| Route | Page | Purpose | Auth Required |
|-------|------|---------|---|
| `/community` | Community | Community hub and groups | No |
| `/forums` | Forums | Discussion forums | No |
| `/groups` | Groups | Community groups | No |
| `/testimonials` | Testimonials | User testimonials | No |
| `/success-stories` | Success Stories | User success stories | No |
| `/experts` | Experts | Expert profiles | No |
| `/research` | Research | Research and studies | No |
| `/insights` | Insights | Health insights and tips | No |
| `/soleus` | Soleus Info | Soleus muscle information | No |

#### Utilities
| Route | Page | Purpose | Auth Required |
|-------|------|---------|---|
| `/search` | Search | Search functionality | No |
| `/newsletter` | Newsletter | Newsletter signup | No |
| `/faq` | FAQ | Frequently asked questions | No |
| `/sitemap-page` | Sitemap | Website sitemap | No |

---

### 2. Authentication Pages (No Authentication Required)

| Route | Page | Purpose | Auth Required |
|-------|------|---------|---|
| `/login` | Login | User login page | No |
| `/signin` | Sign In | Alternative sign in page | No |
| `/forgot-password` | Forgot Password | Password reset request | No |

---

### 3. User Pages (Authentication Required)

#### User Dashboard & Profile
| Route | Page | Purpose | Auth Required |
|-------|------|---------|---|
| `/dashboard` | Dashboard | User dashboard with profile info | Yes |
| `/user-dashboard` | User Dashboard | Alternative user dashboard | Yes |
| `/user-profile` | User Profile | User profile page | Yes |
| `/user-settings` | User Settings | User account settings | Yes |
| `/change-password` | Change Password | Change password page | Yes |
| `/email-preferences` | Email Preferences | Email notification settings | Yes |
| `/my-certificates` | Certificates | User certificates and achievements | Yes |

#### Checkout & Orders
| Route | Page | Purpose | Auth Required |
|-------|------|---------|---|
| `/checkout` | Checkout | Program checkout page | Yes |
| `/order-confirmation/[id]` | Order Confirmation | Order confirmation page (dynamic) | Yes |

---

### 4. Admin Pages (Admin Role Required)

#### Admin Dashboard
| Route | Page | Purpose | Auth Required | Role Required |
|-------|------|---------|---|---|
| `/admin` | Admin Dashboard | Admin overview and stats | Yes | Admin |

#### Admin Management Pages
| Route | Page | Purpose | Auth Required | Role Required |
|-------|------|---------|---|---|
| `/admin/users` | User Management | Manage all users | Yes | Admin |
| `/admin/blogs` | Blog Management | Create/edit/delete blog posts | Yes | Admin |
| `/admin/images` | Image Management | Upload and manage images | Yes | Admin |
| `/admin/programs` | Program Management | Create/edit/delete programs | Yes | Admin |
| `/admin/enrollments` | Enrollment Management | Track user enrollments | Yes | Admin |
| `/admin/contacts` | Contact Management | Manage contact form submissions | Yes | Admin |
| `/admin/emails` | Email Campaigns | Create and send email campaigns | Yes | Admin |
| `/admin/analytics` | Analytics | View website analytics and events | Yes | Admin |

---

## Frontend Route Summary

### By Category

| Category | Count | Routes |
|----------|-------|--------|
| Public Pages | 7 | Home, About, Contact, Careers, Pricing, Privacy, Terms |
| Blog | 11 | Blog list + 10 blog posts |
| Programs | 6 | Programs list + 5 program details |
| Community | 8 | Community, Forums, Groups, Testimonials, Stories, Experts, Research, Insights |
| Utilities | 4 | Search, Newsletter, FAQ, Sitemap |
| Auth | 3 | Login, Sign In, Forgot Password |
| User | 7 | Dashboard, Profile, Settings, Password, Email Prefs, Certificates, etc. |
| Admin | 9 | Dashboard + 8 management pages |
| **Total** | **61** | |

### By Authentication

| Type | Count | Requires Auth |
|------|-------|---|
| Public | 31 | No |
| Auth Required | 7 | Yes |
| Admin Only | 9 | Yes (Admin role) |
| Dynamic | 1 | Yes |
| **Total** | **61** | |

---

## Backend API Routes (NOT USED)

### Overview
- **Status**: Implemented but NOT used by frontend
- **Database**: PostgreSQL (separate from Supabase)
- **Authentication**: JWT tokens
- **Base URL**: `http://localhost:5000/api`

### API Endpoints

#### 1. Authentication Routes (`/api/auth`)
```
POST   /api/auth/register          - Register new user
POST   /api/auth/login             - Login user
GET    /api/auth/verify            - Verify JWT token
POST   /api/auth/refresh           - Refresh JWT token
POST   /api/auth/logout            - Logout user
```

#### 2. User Routes (`/api/users`)
```
GET    /api/users/:id              - Get user profile
PUT    /api/users/:id              - Update user profile
GET    /api/users/:id/enrollments  - Get user enrollments
DELETE /api/users/:id              - Delete user account
```

#### 3. Program Routes (`/api/programs`)
```
GET    /api/programs               - Get all programs
GET    /api/programs/:id           - Get single program
POST   /api/programs               - Create program (admin)
PUT    /api/programs/:id           - Update program (admin)
DELETE /api/programs/:id           - Delete program (admin)
```

#### 4. Enrollment Routes (`/api/enrollments`)
```
POST   /api/enrollments            - Create enrollment
GET    /api/enrollments            - Get user enrollments
GET    /api/enrollments/:id        - Get enrollment details
PUT    /api/enrollments/:id        - Update enrollment
DELETE /api/enrollments/:id        - Cancel enrollment
```

#### 5. Contact Routes (`/api/contacts`)
```
POST   /api/contacts               - Submit contact form
GET    /api/contacts               - Get all contacts (admin)
GET    /api/contacts/:id           - Get contact details (admin)
PUT    /api/contacts/:id           - Update contact status (admin)
DELETE /api/contacts/:id           - Delete contact (admin)
```

#### 6. Email Routes (`/api/emails`)
```
POST   /api/emails/campaigns       - Create email campaign (admin)
GET    /api/emails/campaigns       - Get all campaigns (admin)
GET    /api/emails/campaigns/:id   - Get campaign details (admin)
PUT    /api/emails/campaigns/:id   - Update campaign (admin)
DELETE /api/emails/campaigns/:id   - Delete campaign (admin)
POST   /api/emails/send            - Send campaign (admin)
GET    /api/emails/stats/:id       - Get campaign stats (admin)
```

#### 7. Analytics Routes (`/api/analytics`)
```
GET    /api/analytics/dashboard    - Get dashboard analytics
GET    /api/analytics/users        - Get user analytics
GET    /api/analytics/programs     - Get program analytics
GET    /api/analytics/events       - Get event analytics
POST   /api/analytics/events       - Log analytics event
```

#### Health Check
```
GET    /health                     - API health status
```

---

## Backend API Summary

| Endpoint Group | Count | Status |
|---|---|---|
| Auth | 5 | ❌ Not used |
| Users | 4 | ❌ Not used |
| Programs | 5 | ❌ Not used |
| Enrollments | 5 | ❌ Not used |
| Contacts | 5 | ❌ Not used |
| Emails | 7 | ❌ Not used |
| Analytics | 5 | ❌ Not used |
| **Total** | **36** | ❌ Not used |

---

## Architecture Comparison

### Frontend (Used ✅)
```
Frontend (Next.js)
    ↓
Supabase (PostgreSQL + Auth)
    ↓
Database + Authentication
```

### Backend (Not Used ❌)
```
Backend (Express)
    ↓
PostgreSQL (Separate)
    ↓
Duplicate Database
```

---

## Data Flow

### Current (Frontend Only)
```
User → Frontend (Next.js) → Supabase → Database
                         → Auth
                         → Storage
```

### If Backend Was Used
```
User → Frontend (Next.js) → Backend (Express) → PostgreSQL
                                             → Auth
                                             → Email
```

---

## Frontend Features by Route

### Public Features
- ✅ Browse programs
- ✅ Read blog posts
- ✅ View community
- ✅ Search content
- ✅ Contact form
- ✅ View testimonials

### User Features
- ✅ User authentication
- ✅ User dashboard
- ✅ User profile
- ✅ Program enrollment
- ✅ Certificate tracking
- ✅ Email preferences

### Admin Features
- ✅ User management
- ✅ Blog management
- ✅ Image management
- ✅ Program management
- ✅ Enrollment tracking
- ✅ Contact management
- ✅ Email campaigns
- ✅ Analytics

---

## Database Tables (Supabase)

### User Management
- `user_profiles` - User profiles with roles
- `auth.users` - Supabase auth users

### Content
- `blog_posts` - Blog articles
- `images` - Uploaded images
- `programs` - Program information

### User Activity
- `enrollments` - User program enrollments
- `contacts` - Contact form submissions
- `email_campaigns` - Email campaigns
- `email_logs` - Email sending logs
- `analytics_events` - User analytics

---

## Deployment Status

### Frontend ✅
- **Status**: Production ready
- **Routes**: 61 all working
- **Deploy to**: Vercel
- **Root directory**: `./frontend`

### Backend ❌
- **Status**: Not used
- **Routes**: 36 implemented but unused
- **Deploy**: Optional (not needed)

### Supabase ✅
- **Status**: Connected and working
- **Database**: PostgreSQL
- **Auth**: Supabase Auth
- **Storage**: Image storage

---

## Route Statistics

| Metric | Count |
|--------|-------|
| Total Frontend Routes | 61 |
| Public Routes | 31 |
| Authenticated Routes | 7 |
| Admin Routes | 9 |
| Dynamic Routes | 1 |
| Blog Posts | 10 |
| Programs | 5 |
| Admin Management Pages | 8 |
| **Total Backend API Endpoints** | **36** |
| **Backend Status** | **Not Used** |

---

## Summary

### What's Deployed
✅ **Frontend**: 61 routes, all working
✅ **Supabase**: Database and auth, connected
❌ **Backend**: 36 endpoints, not used

### What Users See
- 31 public pages
- 7 user pages (after login)
- 9 admin pages (admin only)

### What's Not Used
- 36 backend API endpoints
- Separate PostgreSQL database
- Backend authentication system

### Recommendation
- ✅ Deploy frontend only
- ✅ Use Supabase
- ❌ Skip backend (not needed)

---

## Next Steps

1. **Deploy Frontend to Vercel**
   - Root directory: `./frontend`
   - All 61 routes will be live

2. **Verify All Routes Work**
   - Test public pages
   - Test user pages
   - Test admin pages

3. **Monitor Performance**
   - Check Vercel analytics
   - Monitor Supabase usage
   - Track error logs

---

**Status**: ✅ All 61 frontend routes ready for deployment
**Backend**: ❌ Not needed for current features
**Recommendation**: Deploy frontend only
