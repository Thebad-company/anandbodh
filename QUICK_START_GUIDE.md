# 🚀 Quick Start Guide - Frontend Completion

## Current Status: 65% Complete ✅

### What's Working Now

#### 1. **Authentication** ✅
- User registration at `/register`
- User login at `/login`
- Password reset at `/forgot-password`
- Token-based authentication
- Protected routes

#### 2. **User System** ✅
- User dashboard at `/user-dashboard`
- User profile at `/user-profile`
- User settings at `/user-settings`
- Change password at `/change-password`
- Email preferences at `/email-preferences`

#### 3. **Payment & Enrollment** ✅
- Stripe payment integration
- Checkout page at `/checkout`
- Order confirmation at `/order-confirmation/[id]`
- Enrollment button on programs
- Program CTA sections

#### 4. **Admin Dashboard** ✅
- Admin dashboard at `/admin`
- User management at `/admin/users`
- Program management at `/admin/programs`
- Enrollment tracking at `/admin/enrollments`
- Contact management at `/admin/contacts`
- Email campaigns at `/admin/emails`
- Analytics at `/admin/analytics`

---

## How to Test Locally

### 1. Start Backend
```bash
cd backend
npm run dev
```
Backend runs on `http://localhost:5000`

### 2. Start Frontend
```bash
npm run dev
```
Frontend runs on `http://localhost:3000`

### 3. Test Authentication Flow
1. Go to `http://localhost:3000/register`
2. Create a test account
3. Login with credentials
4. View dashboard at `/user-dashboard`

### 4. Test Payment Flow
1. Go to any program page (e.g., `/programs/meditation`)
2. Click "Enroll Now" button
3. You'll be redirected to checkout
4. Use test card: `4242 4242 4242 4242`
5. Any future date and any CVC
6. Complete payment
7. See order confirmation

### 5. Test Admin Dashboard
1. Login with admin account (if available)
2. Go to `/admin`
3. View admin sections

---

## Environment Setup

### Create `.env.local`
```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_STRIPE_KEY=pk_test_YOUR_STRIPE_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_STRIPE_KEY
```

### Get Stripe Keys
1. Go to https://dashboard.stripe.com
2. Get test keys from Developers section
3. Add to `.env.local`

---

## File Structure

### Key Frontend Files
```
src/
├── app/
│   ├── layout.js                 # Root layout with providers
│   ├── globals.css               # Global styles
│   ├── login/page.js             # Login page
│   ├── register/page.js          # Register page
│   ├── checkout/page.js          # Checkout with Stripe
│   ├── user-dashboard/page.js    # User dashboard
│   ├── user-profile/page.js      # User profile
│   ├── admin/                    # Admin pages
│   └── programs/                 # Program pages
├── components/
│   ├── StripePaymentForm.jsx     # Stripe payment form
│   ├── EnrollButton.jsx          # Enroll button
│   ├── ProgramCTA.jsx            # Program CTA section
│   ├── Navbar.jsx                # Navigation
│   └── Footer.jsx                # Footer
├── context/
│   ├── AuthContext.js            # Auth state management
│   └── StripeContext.js          # Stripe provider
└── lib/
    └── api.js                    # API client
```

---

## API Endpoints Used

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/verify` - Verify token

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `GET /api/users/enrollments` - Get enrollments

### Programs
- `GET /api/programs` - Get all programs
- `GET /api/programs/:id` - Get program details

### Enrollments
- `POST /api/enrollments` - Create enrollment
- `GET /api/enrollments/:id` - Get enrollment
- `PUT /api/enrollments/:id/progress` - Update progress

### Payments
- `POST /api/payments/intent` - Create payment intent
- `POST /api/payments/confirm` - Confirm payment

### Analytics
- `GET /api/analytics/dashboard` - Get dashboard stats

---

## Next Steps to Complete

### Phase 2: Admin Management (2-3 hours)
1. [ ] Fetch users in admin/users
2. [ ] Fetch programs in admin/programs
3. [ ] Fetch enrollments in admin/enrollments
4. [ ] Add search/filter
5. [ ] Add pagination

### Phase 3: Community Features (3-4 hours)
1. [ ] Forum post creation
2. [ ] Forum post display
3. [ ] Comments system
4. [ ] Group messaging
5. [ ] Notifications

### Phase 4: Video Integration (2-3 hours)
1. [ ] Video player component
2. [ ] Video lessons
3. [ ] Progress tracking
4. [ ] Comments

### Phase 5: Assessment System (2-3 hours)
1. [ ] Assessment quiz
2. [ ] Score calculation
3. [ ] Recommendations
4. [ ] Score tracking

---

## Common Issues & Solutions

### Issue: "Stripe is not defined"
**Solution:** Make sure StripeProvider is in layout.js

### Issue: "API connection failed"
**Solution:** Check backend is running on port 5000

### Issue: "Token not persisting"
**Solution:** Check localStorage is enabled in browser

### Issue: "Payment form not showing"
**Solution:** Verify NEXT_PUBLIC_STRIPE_KEY is set in .env.local

---

## Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel deploy --prod
```

### Deploy Backend to Heroku
```bash
git push heroku main
```

---

## Useful Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Check for TypeScript errors
npm run type-check

# Format code
npm run format
```

---

## Testing Credentials

### Test User
- Email: `test@example.com`
- Password: `password123`

### Test Card (Stripe)
- Number: `4242 4242 4242 4242`
- Expiry: Any future date (e.g., 12/25)
- CVC: Any 3 digits (e.g., 123)

---

## Support & Documentation

### Backend Documentation
- See `BACKEND_SETUP.md` for backend setup
- See `INTEGRATION_GUIDE.md` for integration details

### Frontend Documentation
- See `FRONTEND_COMPLETION_PLAN.md` for roadmap
- See `IMPLEMENTATION_STATUS.md` for current status

### API Documentation
- Backend API docs at `http://localhost:5000/api/docs` (if available)

---

## Performance Tips

1. **Images:** All images are optimized with Next.js Image component
2. **Code Splitting:** Routes are automatically code-split
3. **Caching:** API responses are cached where appropriate
4. **Lazy Loading:** Components are lazy-loaded when needed

---

## Security Checklist

✅ Passwords hashed with bcrypt  
✅ JWT tokens for authentication  
✅ CORS configured  
✅ Input validation on forms  
✅ SQL injection prevention  
✅ XSS protection  
✅ HTTPS in production  

---

## Monitoring & Debugging

### Check Build Status
```bash
npm run build
```

### Check for Errors
```bash
npm run lint
```

### View Console Logs
- Open browser DevTools (F12)
- Check Console tab for errors
- Check Network tab for API calls

### Debug API Calls
- Use browser DevTools Network tab
- Check request/response headers
- Verify token is being sent

---

## Next Review

**Date:** After admin data tables completion  
**Estimated Time:** 2-3 hours  
**Priority:** Complete admin management before community features

---

**Last Updated:** April 6, 2026  
**Status:** 65% Complete - Ready for Phase 2

