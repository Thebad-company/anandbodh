# Complete Deployment Guide - Anandbodh

## Overview

Your project has 3 components:
1. **Frontend** (Next.js) - Required for everything
2. **Supabase** (Database) - Required for everything
3. **Backend** (Express) - Optional, not used

---

## What to Deploy

### ✅ DEPLOY: Frontend
- Contains all pages
- Contains admin panel
- Contains user dashboard
- Connects to Supabase

### ✅ USE: Supabase
- Already set up
- Just connect in frontend
- No deployment needed

### ❌ SKIP: Backend
- Not used by frontend
- Not used by admin
- Not needed for any features

---

## Deployment Architecture

```
Users
  ↓
Vercel (Frontend)
  ↓
Supabase (Database + Auth)
  ↓
PostgreSQL (Supabase managed)

Backend (NOT USED)
  ↓
Unused
```

---

## Step-by-Step Deployment

### Step 1: Prepare Frontend

```bash
# Verify build works
cd frontend
npm run build

# Should show: ✓ Compiled successfully
# Should show: All 61 routes compile
```

### Step 2: Deploy to Vercel

**Option A: Using Vercel Dashboard**
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework**: Next.js
   - **Root Directory**: `./frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Add Environment Variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL = your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY = your_supabase_anon_key
   ```
6. Click "Deploy"

**Option B: Using Vercel CLI**
```bash
npm i -g vercel
cd frontend
vercel
# Follow prompts
```

### Step 3: Verify Deployment

1. Go to your Vercel URL
2. Check if website loads
3. Try logging in
4. Try accessing `/admin`
5. Verify all pages work

### Step 4: Set Admin Role

1. Go to Supabase Dashboard
2. Go to `user_profiles` table
3. Find your user row
4. Set `role` column to `admin`
5. Refresh `/admin` page

---

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### Vercel Dashboard
Same as above:
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

---

## Verification Checklist

### Frontend
- [ ] Website loads
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Search works
- [ ] Blog loads
- [ ] Programs load

### Authentication
- [ ] Can sign up
- [ ] Can login
- [ ] Can logout
- [ ] Dashboard shows user data
- [ ] Welcome message displays

### Admin Panel
- [ ] Can access `/admin`
- [ ] Dashboard shows stats
- [ ] User management works
- [ ] Blog management works
- [ ] Image management works
- [ ] Programs management works
- [ ] Enrollments tracking works
- [ ] Contacts management works
- [ ] Email campaigns work
- [ ] Analytics work

### Mobile
- [ ] Website responsive
- [ ] Mobile menu works
- [ ] Buttons clickable
- [ ] Forms work
- [ ] Admin accessible on mobile

---

## Troubleshooting

### Issue: "Cannot find module"
**Solution**: Make sure root directory is set to `./frontend`

### Issue: "Supabase connection failed"
**Solution**: Check environment variables are set correctly

### Issue: "Admin page shows 'Loading...'"
**Solution**: Check if user role is set to 'admin' in Supabase

### Issue: "Build fails"
**Solution**: Run `npm run build` locally to see errors

### Issue: "Pages not loading"
**Solution**: Check Vercel logs for errors

---

## Cost Breakdown

### Vercel (Frontend)
- Free tier: Unlimited deployments, 100GB bandwidth
- Pro: $20/month for more features
- **Recommendation**: Start with free tier

### Supabase (Database)
- Free tier: 500MB storage, 2GB bandwidth
- Pro: $25/month for more storage
- **Recommendation**: Start with free tier

### Total Cost
- **Free**: $0/month
- **Pro**: $45/month

---

## After Deployment

### Monitor Performance
1. Check Vercel Analytics
2. Check Supabase usage
3. Monitor error logs

### Update Content
1. Login to admin panel
2. Add blog posts
3. Add programs
4. Manage users
5. View analytics

### Maintenance
1. Keep dependencies updated
2. Monitor security alerts
3. Backup Supabase data
4. Check error logs regularly

---

## Optional: Backend Deployment

If you later need email sending or custom logic:

### Step 1: Update Backend
- Change from PostgreSQL to Supabase
- Add email functionality
- Add custom logic

### Step 2: Deploy Backend
- Deploy to Render or Railway
- Set environment variables
- Test endpoints

### Step 3: Connect Frontend
- Update frontend to call backend
- Add backend API calls
- Test integration

**For now**: Skip this. Frontend + Supabase is enough.

---

## Deployment Timeline

| Step | Time | Status |
|------|------|--------|
| Prepare frontend | 5 min | ✅ Ready |
| Deploy to Vercel | 10 min | ✅ Ready |
| Set environment vars | 5 min | ✅ Ready |
| Verify deployment | 10 min | ✅ Ready |
| Set admin role | 5 min | ✅ Ready |
| **Total** | **35 min** | ✅ Ready |

---

## Summary

### What to Deploy
- ✅ Frontend to Vercel
- ✅ Use Supabase (already set up)
- ❌ Skip backend

### What You Get
- ✅ Live website
- ✅ Working admin panel
- ✅ User authentication
- ✅ Database
- ✅ Image storage

### Cost
- Free tier: $0/month
- Pro tier: $45/month

### Time to Deploy
- ~35 minutes

---

## Next Steps

1. **Deploy Frontend**
   - Go to Vercel
   - Import repository
   - Set root directory to `./frontend`
   - Add environment variables
   - Deploy

2. **Verify Everything Works**
   - Test website
   - Test admin panel
   - Test authentication

3. **Set Admin Role**
   - Go to Supabase
   - Set your role to 'admin'
   - Access admin panel

4. **Start Using**
   - Add content
   - Manage users
   - View analytics

---

**Status**: ✅ Ready to deploy

**Recommendation**: Deploy frontend only. Backend is optional.

**Questions?** Check the documentation files for more details.
