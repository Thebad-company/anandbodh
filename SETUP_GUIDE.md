# Anandbodh - Complete Setup Guide

## Project Structure

```
anandbodh/
├── frontend/          # Next.js Frontend (Port 3000)
├── backend-api/       # Express Backend (Port 5000)
├── docker-compose.yml # Docker orchestration
└── README.md          # Project overview
```

## Prerequisites

- Node.js 18+
- npm or yarn
- Git
- Docker (optional)
- Supabase account

## Step 1: Clone Repository

```bash
git clone <repository-url>
cd anandbodh
```

## Step 2: Frontend Setup

### Install Dependencies
```bash
cd frontend
npm install
```

### Configure Environment Variables
Create `frontend/.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Start Development Server
```bash
npm run dev
```

Frontend runs on `http://localhost:3000`

## Step 3: Backend Setup (Optional)

### Install Dependencies
```bash
cd backend-api
npm install
```

### Configure Environment Variables
Create `backend-api/.env`:
```
DATABASE_URL=postgresql://user:password@localhost:5432/anandbodh
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
PORT=5000
```

### Start Server
```bash
npm start
```

Backend runs on `http://localhost:5000`

## Step 4: Supabase Setup

### 1. Create Supabase Project
- Go to https://app.supabase.com
- Create new project
- Copy URL and Anon Key to `.env.local`

### 2. Create Database Tables
In Supabase SQL Editor, run:

```sql
-- Copy entire content from SUPABASE_SCHEMA.sql
-- Copy entire content from SUPABASE_ADMIN_SCHEMA.sql
```

### 3. Create Storage Bucket
- Go to Storage → Buckets
- Create new bucket: `blog-images`
- Make it public

### 4. Set Admin User
```sql
UPDATE user_profiles 
SET role = 'admin' 
WHERE email = 'your-email@example.com';
```

## Step 5: Access Admin Panel

1. Sign up at `http://localhost:3000/signin`
2. Go to Supabase Dashboard
3. Update your user role to 'admin':
   ```sql
   UPDATE user_profiles 
   SET role = 'admin' 
   WHERE email = 'your-email@example.com';
   ```
4. Access admin panel at `http://localhost:3000/admin`

## Step 6: Create First Blog Post

1. Go to `http://localhost:3000/admin/blogs`
2. Click "+ New Blog Post"
3. Fill in:
   - Title
   - Slug (URL-friendly)
   - Content
   - Category
   - Status (Draft/Published)
4. Click "Create Blog Post"

## Step 7: Upload Images

1. Go to `http://localhost:3000/admin/images`
2. Click "Upload New Image"
3. Select image file
4. Fill in:
   - Title
   - Description
   - Alt Text
   - Category
5. Click "Upload Image"

## Docker Setup (Optional)

### Build and Run with Docker Compose

```bash
# Build images
docker-compose build

# Start services
docker-compose up

# Stop services
docker-compose down
```

Services:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## Development Workflow

### Frontend Development
```bash
cd frontend
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Check code quality
```

### Backend Development
```bash
cd backend-api
npm start            # Start server
npm run dev          # Start with auto-reload
```

## Deployment

### Frontend (Vercel)
```bash
cd frontend
npm install -g vercel
vercel deploy
```

### Backend (Railway/Heroku)
```bash
cd backend-api
# Follow platform-specific deployment steps
```

## Troubleshooting

### "Supabase not initialized"
- Check `.env.local` has correct credentials
- Restart dev server after env changes

### "Access Denied" in Admin Panel
- Verify user role is 'admin' in Supabase
- Check RLS policies are enabled

### Images Not Uploading
- Verify `blog-images` bucket exists and is public
- Check file size (< 10MB)
- Check browser console for errors

### Backend Connection Issues
- Verify DATABASE_URL is correct
- Check PostgreSQL is running
- Verify JWT_SECRET is set

## Project Routes

### Public
- `/` - Homepage
- `/programs` - Programs
- `/blog` - Blog
- `/signin` - Sign up
- `/login` - Login

### Protected
- `/user-dashboard` - Dashboard
- `/user-settings` - Settings

### Admin
- `/admin` - Dashboard
- `/admin/blogs` - Blog management
- `/admin/images` - Image management
- `/admin/programs` - Program management
- `/admin/users` - User management

## File Structure

### Frontend
```
frontend/
├── src/
│   ├── app/              # Next.js pages
│   ├── components/       # React components
│   ├── context/          # Auth, Stripe context
│   ├── lib/              # Supabase, API helpers
│   └── app/globals.css   # Global styles
├── public/               # Static files
├── package.json
└── .env.local
```

### Backend
```
backend-api/
├── routes/               # API endpoints
├── middleware/           # Auth middleware
├── db/                   # Database schema
├── scripts/              # Setup scripts
├── server.js             # Express app
└── package.json
```

## Next Steps

1. ✅ Set up frontend
2. ✅ Configure Supabase
3. ✅ Create database tables
4. ✅ Set admin user
5. Create blog posts
6. Upload images
7. Customize styling
8. Deploy to production

## Support

- Check README.md for overview
- Review ADMIN_PANEL_SETUP.md for admin features
- Check SUPABASE_AUTHENTICATION_SETUP.md for auth
- Review Supabase documentation

## Environment Variables Reference

### Frontend (.env.local)
| Variable | Description |
|----------|-------------|
| NEXT_PUBLIC_SUPABASE_URL | Supabase project URL |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Supabase anonymous key |

### Backend (.env)
| Variable | Description |
|----------|-------------|
| DATABASE_URL | PostgreSQL connection string |
| JWT_SECRET | Secret for JWT signing |
| JWT_EXPIRE | JWT expiration time |
| PORT | Server port (default: 5000) |

## Quick Commands

```bash
# Frontend
cd frontend && npm install && npm run dev

# Backend
cd backend-api && npm install && npm start

# Docker
docker-compose up

# Build
cd frontend && npm run build
cd backend-api && npm run build
```

## License

Proprietary - Anandbodh
