# Routes Quick Reference

## Total Routes: 61 Frontend + 36 Backend (Unused)

---

## Frontend Routes by Category

### PUBLIC (31 routes - No login needed)
**Home & Main (7)**
- `/` - Home
- `/about` - About
- `/contact` - Contact
- `/careers` - Careers
- `/pricing` - Pricing
- `/privacy` - Privacy
- `/terms` - Terms

**Blog (11)**
- `/blog` - Blog list
- `/blog/soleus-muscle`
- `/blog/stress-science`
- `/blog/meditation-as-medicine`
- `/blog/sleep-quality`
- `/blog/nutrition-wellness`
- `/blog/movement-exercise`
- `/blog/ayurveda-balance`
- `/blog/emotional-detox`
- `/blog/reversing-disorders`
- `/blog/divyanubhuti-dhyan`

**Programs (6)**
- `/programs` - Programs list
- `/programs/soleus-activation`
- `/programs/meditation`
- `/programs/ayurveda`
- `/programs/thrive-at-work`
- `/programs/wake-up-life`

**Community (8)**
- `/community` - Community hub
- `/forums` - Forums
- `/groups` - Groups
- `/testimonials` - Testimonials
- `/success-stories` - Success stories
- `/experts` - Experts
- `/research` - Research
- `/insights` - Insights

**Utilities (4)**
- `/search` - Search
- `/newsletter` - Newsletter
- `/faq` - FAQ
- `/sitemap-page` - Sitemap

---

### AUTHENTICATION (3 routes - No login needed)
- `/login` - Login page
- `/signin` - Sign in page
- `/forgot-password` - Password reset

---

### USER (9 routes - Login required)
**Dashboard & Profile (4)**
- `/dashboard` - User dashboard
- `/user-dashboard` - Alternative dashboard
- `/user-profile` - User profile
- `/user-settings` - User settings

**Account (3)**
- `/change-password` - Change password
- `/email-preferences` - Email preferences
- `/my-certificates` - Certificates

**Checkout (2)**
- `/checkout` - Checkout page
- `/order-confirmation/[id]` - Order confirmation (dynamic)

---

### ADMIN (9 routes - Admin login required)
- `/admin` - Admin dashboard
- `/admin/users` - User management
- `/admin/blogs` - Blog management
- `/admin/images` - Image management
- `/admin/programs` - Program management
- `/admin/enrollments` - Enrollment tracking
- `/admin/contacts` - Contact management
- `/admin/emails` - Email campaigns
- `/admin/analytics` - Analytics

---

## Backend API Endpoints (NOT USED)

### Auth (5)
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/verify`
- `POST /api/auth/refresh`
- `POST /api/auth/logout`

### Users (4)
- `GET /api/users/:id`
- `PUT /api/users/:id`
- `GET /api/users/:id/enrollments`
- `DELETE /api/users/:id`

### Programs (5)
- `GET /api/programs`
- `GET /api/programs/:id`
- `POST /api/programs`
- `PUT /api/programs/:id`
- `DELETE /api/programs/:id`

### Enrollments (5)
- `POST /api/enrollments`
- `GET /api/enrollments`
- `GET /api/enrollments/:id`
- `PUT /api/enrollments/:id`
- `DELETE /api/enrollments/:id`

### Contacts (5)
- `POST /api/contacts`
- `GET /api/contacts`
- `GET /api/contacts/:id`
- `PUT /api/contacts/:id`
- `DELETE /api/contacts/:id`

### Emails (7)
- `POST /api/emails/campaigns`
- `GET /api/emails/campaigns`
- `GET /api/emails/campaigns/:id`
- `PUT /api/emails/campaigns/:id`
- `DELETE /api/emails/campaigns/:id`
- `POST /api/emails/send`
- `GET /api/emails/stats/:id`

### Analytics (5)
- `GET /api/analytics/dashboard`
- `GET /api/analytics/users`
- `GET /api/analytics/programs`
- `GET /api/analytics/events`
- `POST /api/analytics/events`

---

## Route Statistics

| Category | Count |
|----------|-------|
| Public | 31 |
| Auth | 3 |
| User | 9 |
| Admin | 9 |
| **Frontend Total** | **61** |
| Backend (unused) | 36 |

---

## What's Used vs Not Used

✅ **USED**
- Frontend: 61 routes
- Supabase: Database + Auth
- Next.js: Framework

❌ **NOT USED**
- Backend: 36 API endpoints
- Express: Backend framework
- PostgreSQL: Backend database

---

## Deployment

**Deploy**: Frontend only
**Root Directory**: `./frontend`
**Platform**: Vercel
**Database**: Supabase
**Backend**: Skip (not needed)

---

## Access Levels

| Level | Routes | Requires |
|-------|--------|----------|
| Public | 31 | Nothing |
| Auth | 3 | Nothing |
| User | 9 | Login |
| Admin | 9 | Admin role |

---

## Key Features

**Public Can**
- Browse programs
- Read blog
- View community
- Search
- Contact

**Users Can**
- Login/logout
- View dashboard
- Enroll in programs
- View certificates
- Manage settings

**Admin Can**
- Manage users
- Create/edit blog
- Upload images
- Manage programs
- Track enrollments
- View analytics

---

## Summary

- **61 Frontend Routes**: All working ✅
- **36 Backend Endpoints**: Not used ❌
- **Deployment**: Frontend only
- **Status**: Production ready
