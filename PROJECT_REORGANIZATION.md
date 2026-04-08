# Project Reorganization - Frontend & Backend Separation

## What Changed

The Anandbodh project has been reorganized into separate frontend and backend folders for better maintainability and scalability.

## New Structure

```
anandbodh/
├── frontend/                    # Next.js Frontend Application
│   ├── src/                     # Source code
│   │   ├── app/                 # Next.js pages and routes
│   │   ├── components/          # React components
│   │   ├── context/             # Auth, Stripe context
│   │   └── lib/                 # Utilities (Supabase, API)
│   ├── public/                  # Static assets
│   ├── .env.local               # Frontend environment variables
│   ├── package.json
│   ├── next.config.mjs
│   ├── Dockerfile               # Docker configuration
│   └── .next/                   # Build output
│
├── backend-api/                 # Express Backend (Optional)
│   ├── routes/                  # API endpoints
│   ├── middleware/              # Express middleware
│   ├── db/                      # Database schema
│   ├── scripts/                 # Database scripts
│   ├── server.js                # Express server
│   ├── package.json
│   ├── Dockerfile               # Docker configuration
│   └── .env                     # Backend environment variables
│
├── docker-compose.yml           # Docker orchestration
├── README.md                    # Project overview
├── SETUP_GUIDE.md               # Complete setup instructions
├── ADMIN_PANEL_SETUP.md         # Admin panel documentation
├── SUPABASE_SCHEMA.sql          # Database schema
├── SUPABASE_ADMIN_SCHEMA.sql    # Admin tables
└── .gitignore                   # Git ignore rules
```

## Key Changes

### Frontend
- **Location**: `frontend/` folder
- **Port**: 3000
- **Technology**: Next.js 14+, React, Supabase
- **Environment**: `frontend/.env.local`
- **Commands**:
  ```bash
  cd frontend
  npm install
  npm run dev      # Development
  npm run build    # Production build
  ```

### Backend
- **Location**: `backend-api/` folder
- **Port**: 5000
- **Technology**: Node.js, Express, PostgreSQL
- **Environment**: `backend-api/.env`
- **Commands**:
  ```bash
  cd backend-api
  npm install
  npm start        # Start server
  ```

### Root Level
- **docker-compose.yml** - Orchestrate both services
- **README.md** - Project overview
- **SETUP_GUIDE.md** - Complete setup instructions
- **PROJECT_REORGANIZATION.md** - This file

## Migration Guide

### If You Were Running Frontend Only

**Before:**
```bash
npm install
npm run dev
```

**After:**
```bash
cd frontend
npm install
npm run dev
```

### If You Were Running Backend

**Before:**
```bash
cd backend
npm install
npm start
```

**After:**
```bash
cd backend-api
npm install
npm start
```

### If You Were Running Both

**Before:**
```bash
# Terminal 1
npm install
npm run dev

# Terminal 2
cd backend
npm install
npm start
```

**After (Option 1 - Manual):**
```bash
# Terminal 1
cd frontend
npm install
npm run dev

# Terminal 2
cd backend-api
npm install
npm start
```

**After (Option 2 - Docker):**
```bash
docker-compose up
```

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@localhost:5432/anandbodh
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
PORT=5000
```

## Docker Setup

### Build Images
```bash
docker-compose build
```

### Start Services
```bash
docker-compose up
```

### Stop Services
```bash
docker-compose down
```

### View Logs
```bash
docker-compose logs -f frontend
docker-compose logs -f backend-api
```

## Deployment

### Frontend (Vercel)
```bash
cd frontend
vercel deploy
```

### Backend (Railway/Heroku)
```bash
cd backend-api
# Follow platform-specific instructions
```

## Benefits of Separation

1. **Independent Deployment** - Deploy frontend and backend separately
2. **Scalability** - Scale services independently
3. **Maintainability** - Easier to manage and update each service
4. **Team Collaboration** - Frontend and backend teams can work independently
5. **CI/CD** - Separate pipelines for each service
6. **Containerization** - Easy Docker deployment
7. **Version Control** - Cleaner git history

## File Locations

### Important Frontend Files
- `frontend/src/app/` - Pages and routes
- `frontend/src/components/` - React components
- `frontend/src/context/AuthContext.js` - Authentication
- `frontend/src/lib/supabase.js` - Supabase client
- `frontend/.env.local` - Environment variables

### Important Backend Files
- `backend-api/server.js` - Express app
- `backend-api/routes/` - API endpoints
- `backend-api/middleware/auth.js` - Authentication
- `backend-api/.env` - Environment variables

### Database Files
- `SUPABASE_SCHEMA.sql` - Main schema
- `SUPABASE_ADMIN_SCHEMA.sql` - Admin tables

## Next Steps

1. ✅ Update your development workflow
2. ✅ Update environment variables
3. ✅ Test frontend: `cd frontend && npm run dev`
4. ✅ Test backend: `cd backend-api && npm start`
5. ✅ Test Docker: `docker-compose up`
6. ✅ Update CI/CD pipelines
7. ✅ Deploy to production

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### Module Not Found
```bash
# Reinstall dependencies
cd frontend && rm -rf node_modules && npm install
cd backend-api && rm -rf node_modules && npm install
```

### Docker Issues
```bash
# Clean up Docker
docker-compose down -v
docker system prune -a
docker-compose up --build
```

## Documentation

- **README.md** - Project overview
- **SETUP_GUIDE.md** - Complete setup instructions
- **ADMIN_PANEL_SETUP.md** - Admin panel features
- **SUPABASE_AUTHENTICATION_SETUP.md** - Auth setup
- **PROJECT_REORGANIZATION.md** - This file

## Support

For questions or issues:
1. Check SETUP_GUIDE.md
2. Review README.md
3. Check Supabase documentation
4. Review Express documentation

## Summary

The project is now organized with:
- ✅ Separate frontend and backend folders
- ✅ Independent development workflows
- ✅ Docker support for both services
- ✅ Clear documentation
- ✅ Easy deployment options

Start with `SETUP_GUIDE.md` for complete setup instructions.
