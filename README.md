# Anandbodh - Wellness Platform

A comprehensive wellness platform combining meditation, Ayurveda, and lifestyle programs with modern web technologies.

## Project Structure

```
anandbodh/
├── frontend/                 # Next.js Frontend Application
│   ├── src/
│   │   ├── app/             # Next.js app directory
│   │   ├── components/      # React components
│   │   ├── context/         # React context (Auth, Stripe)
│   │   └── lib/             # Utilities (Supabase, API)
│   ├── public/              # Static assets
│   ├── package.json
│   ├── next.config.mjs
│   └── .env.local           # Frontend environment variables
│
├── backend-api/             # Node.js/Express Backend (Optional)
│   ├── routes/              # API routes
│   ├── middleware/          # Express middleware
│   ├── db/                  # Database schema
│   ├── scripts/             # Database scripts
│   ├── server.js            # Express server
│   └── package.json
│
├── SUPABASE_SCHEMA.sql      # Supabase database schema
├── SUPABASE_ADMIN_SCHEMA.sql # Admin panel tables
├── ADMIN_PANEL_SETUP.md     # Admin panel documentation
└── README.md                # This file
```

## Quick Start

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000`

### Backend Setup (Optional)

```bash
cd backend-api
npm install
npm start
```

Server runs on `http://localhost:5000`

## Technology Stack

### Frontend
- **Framework**: Next.js 14+ (React)
- **Styling**: CSS (custom + Tailwind-ready)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payment**: Stripe
- **Storage**: Supabase Storage

### Backend (Optional)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT

## Key Features

### User Features
- ✅ User authentication (Sign up/Login)
- ✅ Program enrollment
- ✅ Progress tracking
- ✅ User dashboard
- ✅ Blog reading
- ✅ Community features

### Admin Features
- ✅ Blog post management (`/admin/blogs`)
- ✅ Image management (`/admin/images`)
- ✅ User management
- ✅ Program management
- ✅ Enrollment tracking
- ✅ Analytics dashboard

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

### Backend (.env)
```
DATABASE_URL=postgresql://...
JWT_SECRET=your_secret
JWT_EXPIRE=7d
PORT=5000
```

## Database Setup

### 1. Create Supabase Tables
Run in Supabase SQL Editor:
```bash
# Copy content from SUPABASE_SCHEMA.sql
# Copy content from SUPABASE_ADMIN_SCHEMA.sql
```

### 2. Create Storage Bucket
- Go to Supabase Dashboard → Storage
- Create bucket: `blog-images` (make it public)

### 3. Set Admin User
```sql
UPDATE user_profiles 
SET role = 'admin' 
WHERE email = 'your-email@example.com';
```

## Routes

### Public Routes
- `/` - Homepage
- `/programs` - Programs listing
- `/blog` - Blog listing
- `/signin` - Sign up
- `/login` - Login
- `/about`, `/contact`, `/faq` - Info pages

### Protected Routes
- `/user-dashboard` - User dashboard
- `/user-settings` - User settings
- `/checkout` - Checkout page

### Admin Routes
- `/admin` - Admin dashboard
- `/admin/blogs` - Blog management
- `/admin/images` - Image management
- `/admin/programs` - Program management
- `/admin/users` - User management

## Development

### Frontend Development
```bash
cd frontend
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Run ESLint
```

### Backend Development
```bash
cd backend-api
npm start            # Start server
npm run dev          # Start with nodemon
```

## Deployment

### Frontend (Vercel)
```bash
cd frontend
vercel deploy
```

### Backend (Heroku/Railway)
```bash
cd backend-api
# Configure deployment platform
```

## Documentation

- `ADMIN_PANEL_SETUP.md` - Admin panel setup guide
- `SUPABASE_AUTHENTICATION_SETUP.md` - Auth setup
- `SUPABASE_SCHEMA.sql` - Database schema
- `SUPABASE_ADMIN_SCHEMA.sql` - Admin tables

## Project Status

✅ Frontend: Production-ready
✅ Authentication: Supabase (configured)
✅ Admin Panel: Blog & Image management
✅ Database: Supabase (configured)
⏳ Backend API: Optional (custom backend available)

## Next Steps

1. ✅ Set up Supabase tables
2. ✅ Create storage bucket
3. ✅ Set admin user role
4. Create first blog post via `/admin/blogs`
5. Upload images via `/admin/images`
6. Integrate blog posts into frontend
7. Deploy to production

## Support

For issues or questions:
1. Check documentation files
2. Review Supabase dashboard
3. Check browser console for errors
4. Review server logs

## License

Proprietary - Anandbodh
