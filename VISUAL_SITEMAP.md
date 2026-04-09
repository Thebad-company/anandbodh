# Visual Sitemap - Anandbodh

## Website Structure

```
Anandbodh.com
│
├── PUBLIC PAGES (No Login Required)
│   ├── / (Home)
│   ├── /about (About)
│   ├── /contact (Contact)
│   ├── /careers (Careers)
│   ├── /pricing (Pricing)
│   ├── /privacy (Privacy)
│   ├── /terms (Terms)
│   ├── /faq (FAQ)
│   ├── /newsletter (Newsletter)
│   ├── /search (Search)
│   └── /sitemap-page (Sitemap)
│
├── BLOG (No Login Required)
│   ├── /blog (Blog List)
│   ├── /blog/soleus-muscle
│   ├── /blog/stress-science
│   ├── /blog/meditation-as-medicine
│   ├── /blog/sleep-quality
│   ├── /blog/nutrition-wellness
│   ├── /blog/movement-exercise
│   ├── /blog/ayurveda-balance
│   ├── /blog/emotional-detox
│   ├── /blog/reversing-disorders
│   └── /blog/divyanubhuti-dhyan
│
├── PROGRAMS (No Login Required)
│   ├── /programs (Programs List)
│   ├── /programs/soleus-activation
│   ├── /programs/meditation
│   ├── /programs/ayurveda
│   ├── /programs/thrive-at-work
│   └── /programs/wake-up-life
│
├── COMMUNITY (No Login Required)
│   ├── /community (Community Hub)
│   ├── /forums (Forums)
│   ├── /groups (Groups)
│   ├── /testimonials (Testimonials)
│   ├── /success-stories (Success Stories)
│   ├── /experts (Experts)
│   ├── /research (Research)
│   ├── /insights (Insights)
│   └── /soleus (Soleus Info)
│
├── AUTHENTICATION (No Login Required)
│   ├── /login (Login)
│   ├── /signin (Sign In)
│   └── /forgot-password (Forgot Password)
│
├── USER PAGES (Login Required)
│   ├── /dashboard (Dashboard)
│   ├── /user-dashboard (User Dashboard)
│   ├── /user-profile (Profile)
│   ├── /user-settings (Settings)
│   ├── /change-password (Change Password)
│   ├── /email-preferences (Email Preferences)
│   ├── /my-certificates (Certificates)
│   ├── /checkout (Checkout)
│   └── /order-confirmation/[id] (Order Confirmation)
│
└── ADMIN PAGES (Admin Login Required)
    ├── /admin (Admin Dashboard)
    ├── /admin/users (User Management)
    ├── /admin/blogs (Blog Management)
    ├── /admin/images (Image Management)
    ├── /admin/programs (Program Management)
    ├── /admin/enrollments (Enrollment Tracking)
    ├── /admin/contacts (Contact Management)
    ├── /admin/emails (Email Campaigns)
    └── /admin/analytics (Analytics)
```

---

## Route Count by Category

```
PUBLIC PAGES
├── Main Pages: 7
│   ├── Home, About, Contact, Careers, Pricing, Privacy, Terms
│
├── Blog: 11
│   ├── Blog List + 10 Blog Posts
│
├── Programs: 6
│   ├── Programs List + 5 Program Details
│
├── Community: 8
│   ├── Community, Forums, Groups, Testimonials, Stories, Experts, Research, Insights
│
├── Utilities: 4
│   ├── Search, Newsletter, FAQ, Sitemap
│
└── Total Public: 31 routes

AUTHENTICATION
├── Login Pages: 3
│   ├── Login, Sign In, Forgot Password
│
└── Total Auth: 3 routes

USER PAGES (Login Required)
├── Dashboard & Profile: 4
│   ├── Dashboard, User Dashboard, Profile, Settings
│
├── Account Management: 3
│   ├── Change Password, Email Preferences, Certificates
│
├── Checkout: 2
│   ├── Checkout, Order Confirmation
│
└── Total User: 9 routes

ADMIN PAGES (Admin Only)
├── Dashboard: 1
│   ├── Admin Dashboard
│
├── Management: 8
│   ├── Users, Blogs, Images, Programs, Enrollments, Contacts, Emails, Analytics
│
└── Total Admin: 9 routes

TOTAL FRONTEND ROUTES: 61
```

---

## Access Levels

```
┌─────────────────────────────────────────────────────────┐
│ PUBLIC (31 routes)                                      │
│ No authentication required                              │
│ Visible to everyone                                     │
│ ✓ Home, Blog, Programs, Community, etc.                │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ AUTHENTICATED (9 routes)                                │
│ Login required                                          │
│ Visible to logged-in users                              │
│ ✓ Dashboard, Profile, Checkout, etc.                   │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ ADMIN (9 routes)                                        │
│ Admin role required                                     │
│ Visible to admin users only                             │
│ ✓ User Management, Blog Management, Analytics, etc.    │
└─────────────────────────────────────────────────────────┘
```

---

## Frontend vs Backend

```
FRONTEND (61 Routes) ✅ USED
├── Public Pages: 31
├── Auth Pages: 3
├── User Pages: 9
├── Admin Pages: 9
└── Dynamic Routes: 1
    └── /order-confirmation/[id]

BACKEND (36 Endpoints) ❌ NOT USED
├── Auth: 5 endpoints
├── Users: 4 endpoints
├── Programs: 5 endpoints
├── Enrollments: 5 endpoints
├── Contacts: 5 endpoints
├── Emails: 7 endpoints
└── Analytics: 5 endpoints
```

---

## Data Flow

```
USER VISITS WEBSITE
        ↓
    FRONTEND (Next.js)
        ↓
    ┌───────────────────────────────┐
    │   SUPABASE (Used ✅)          │
    ├───────────────────────────────┤
    │ • Authentication              │
    │ • Database (PostgreSQL)       │
    │ • Image Storage               │
    │ • RLS Policies                │
    └───────────────────────────────┘
        ↓
    BACKEND (Express) ❌ NOT USED
        ↓
    UNUSED PostgreSQL
```

---

## Route Breakdown

### Public Routes (31)
```
Home & Main (7)
├── / (Home)
├── /about
├── /contact
├── /careers
├── /pricing
├── /privacy
└── /terms

Blog (11)
├── /blog
├── /blog/soleus-muscle
├── /blog/stress-science
├── /blog/meditation-as-medicine
├── /blog/sleep-quality
├── /blog/nutrition-wellness
├── /blog/movement-exercise
├── /blog/ayurveda-balance
├── /blog/emotional-detox
├── /blog/reversing-disorders
└── /blog/divyanubhuti-dhyan

Programs (6)
├── /programs
├── /programs/soleus-activation
├── /programs/meditation
├── /programs/ayurveda
├── /programs/thrive-at-work
└── /programs/wake-up-life

Community (8)
├── /community
├── /forums
├── /groups
├── /testimonials
├── /success-stories
├── /experts
├── /research
└── /insights

Utilities (4)
├── /search
├── /newsletter
├── /faq
└── /sitemap-page
```

### Auth Routes (3)
```
├── /login
├── /signin
└── /forgot-password
```

### User Routes (9)
```
Dashboard (4)
├── /dashboard
├── /user-dashboard
├── /user-profile
└── /user-settings

Account (3)
├── /change-password
├── /email-preferences
└── /my-certificates

Checkout (2)
├── /checkout
└── /order-confirmation/[id]
```

### Admin Routes (9)
```
├── /admin (Dashboard)
├── /admin/users
├── /admin/blogs
├── /admin/images
├── /admin/programs
├── /admin/enrollments
├── /admin/contacts
├── /admin/emails
└── /admin/analytics
```

---

## Features by Route

### Public Features
```
/                    → Hero, Programs, Testimonials, Community
/blog                → Blog list, search, categories
/programs            → Program details, pricing, enrollment
/community           → Forums, groups, testimonials
/contact             → Contact form
/search              → Search functionality
```

### User Features
```
/dashboard           → User stats, enrollments, profile
/user-profile        → Edit profile, view info
/checkout            → Program enrollment, payment
/my-certificates     → View achievements
```

### Admin Features
```
/admin               → Dashboard with stats
/admin/users         → Manage users, roles
/admin/blogs         → Create/edit/delete posts
/admin/images        → Upload/manage images
/admin/programs      → Create/edit/delete programs
/admin/enrollments   → Track enrollments
/admin/contacts      → Manage inquiries
/admin/emails        → Send campaigns
/admin/analytics     → View analytics
```

---

## Deployment Map

```
VERCEL (Frontend)
├── 61 Routes
├── All pages
├── Admin panel
└── User dashboard

SUPABASE (Database)
├── PostgreSQL
├── Authentication
├── Image storage
└── RLS policies

BACKEND (Express) ❌ NOT DEPLOYED
├── 36 unused endpoints
├── Separate database
└── Not needed
```

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total Routes | 61 |
| Public Routes | 31 |
| Auth Routes | 3 |
| User Routes | 9 |
| Admin Routes | 9 |
| Dynamic Routes | 1 |
| Blog Posts | 10 |
| Programs | 5 |
| Admin Pages | 8 |
| Backend Endpoints | 36 (unused) |

---

## Status

✅ **Frontend**: 61 routes, all working
✅ **Supabase**: Connected and working
❌ **Backend**: Not used, not needed

**Ready to Deploy**: YES
**Deployment Target**: Vercel
**Root Directory**: `./frontend`
