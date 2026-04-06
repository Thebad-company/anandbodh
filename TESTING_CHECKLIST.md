# ✅ Testing Checklist - Frontend Completion

## Pre-Testing Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables
Create `.env.local`:
```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_STRIPE_KEY=pk_test_YOUR_STRIPE_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_STRIPE_KEY
```

### 3. Start Backend
```bash
cd backend
npm run dev
```
✅ Backend should run on `http://localhost:5000`

### 4. Start Frontend
```bash
npm run dev
```
✅ Frontend should run on `http://localhost:3000`

---

## Build Verification

### Run Build
```bash
npm run build
```

### Expected Output
```
✓ Compiled successfully in 11.2s
✓ Generating static pages using 7 workers (59/59) in 1376.3ms
Exit Code: 0
```

### ✅ Verification Checklist
- [ ] Build completes without errors
- [ ] All 59 routes listed
- [ ] No warnings in output
- [ ] Build time < 15 seconds

---

## Authentication Testing

### Test 1: User Registration
**Steps:**
1. Go to `http://localhost:3000/register`
2. Fill in form:
   - First Name: `John`
   - Last Name: `Doe`
   - Email: `john@example.com`
   - Password: `password123`
   - Confirm Password: `password123`
3. Click "Create Account"

**Expected Results:**
- [ ] Form validates input
- [ ] No errors on submission
- [ ] Redirected to `/user-dashboard`
- [ ] User data displayed in dashboard

### Test 2: User Login
**Steps:**
1. Go to `http://localhost:3000/login`
2. Enter credentials:
   - Email: `john@example.com`
   - Password: `password123`
3. Click "Login"

**Expected Results:**
- [ ] Login successful
- [ ] Redirected to `/user-dashboard`
- [ ] User name displayed
- [ ] Token stored in localStorage

### Test 3: Forgot Password
**Steps:**
1. Go to `http://localhost:3000/forgot-password`
2. Enter email: `john@example.com`
3. Click "Send Reset Link"

**Expected Results:**
- [ ] Success message displayed
- [ ] Email confirmation shown
- [ ] Can try another email

### Test 4: Logout
**Steps:**
1. From dashboard, click logout button
2. Try to access `/user-dashboard`

**Expected Results:**
- [ ] Logged out successfully
- [ ] Redirected to login page
- [ ] Token removed from localStorage

---

## User Profile Testing

### Test 5: View Profile
**Steps:**
1. Login to account
2. Go to `/user-profile`

**Expected Results:**
- [ ] Profile form displays
- [ ] Current data populated
- [ ] Email field disabled
- [ ] Save button available

### Test 6: Update Profile
**Steps:**
1. On profile page, change phone number
2. Click "Save Changes"

**Expected Results:**
- [ ] Success message displayed
- [ ] Data updated in form
- [ ] Changes persist on refresh

### Test 7: Change Password
**Steps:**
1. Go to `/change-password`
2. Enter current password
3. Enter new password
4. Confirm new password
5. Click "Change Password"

**Expected Results:**
- [ ] Validation works
- [ ] Success message displayed
- [ ] Can login with new password

---

## Program & Enrollment Testing

### Test 8: Browse Programs
**Steps:**
1. Go to `http://localhost:3000/programs`
2. View all programs

**Expected Results:**
- [ ] All programs displayed
- [ ] Program cards show details
- [ ] Images load correctly
- [ ] Links work

### Test 9: View Program Details
**Steps:**
1. Click on meditation program
2. Go to `/programs/meditation`

**Expected Results:**
- [ ] Program page loads
- [ ] Hero image displays
- [ ] Content sections visible
- [ ] "Enroll Now" button visible

### Test 10: Enroll Without Login
**Steps:**
1. Logout if logged in
2. Go to `/programs/meditation`
3. Click "Enroll Now" button

**Expected Results:**
- [ ] Redirected to `/login`
- [ ] Can login
- [ ] Redirected back to checkout

---

## Payment Testing

### Test 11: Checkout Page
**Steps:**
1. Login to account
2. Go to `/programs/meditation`
3. Click "Enroll Now"

**Expected Results:**
- [ ] Redirected to checkout
- [ ] Program details displayed
- [ ] Price shown
- [ ] Payment form visible

### Test 12: Stripe Payment Form
**Steps:**
1. On checkout page
2. Verify payment form elements:
   - Card details field
   - Test card info displayed
   - Pay button visible

**Expected Results:**
- [ ] CardElement renders
- [ ] Form is interactive
- [ ] No console errors

### Test 13: Process Payment (Test Card)
**Steps:**
1. On checkout page
2. Fill payment form:
   - Card: `4242 4242 4242 4242`
   - Expiry: `12/25`
   - CVC: `123`
3. Click "Pay $99"

**Expected Results:**
- [ ] Payment processing shows
- [ ] No errors
- [ ] Redirected to order confirmation
- [ ] Order ID displayed

### Test 14: Order Confirmation
**Steps:**
1. After successful payment
2. View order confirmation page

**Expected Results:**
- [ ] Order details displayed
- [ ] Order ID shown
- [ ] Program name shown
- [ ] Amount shown
- [ ] Success message displayed

### Test 15: Enrollment in Dashboard
**Steps:**
1. Go to `/user-dashboard`
2. View "Your Programs" section

**Expected Results:**
- [ ] Enrolled program listed
- [ ] Program name displayed
- [ ] Progress bar shown
- [ ] Status displayed
- [ ] Continue button available

---

## Admin Dashboard Testing

### Test 16: Access Admin Dashboard
**Steps:**
1. Login with admin account (if available)
2. Go to `/admin`

**Expected Results:**
- [ ] Admin dashboard loads
- [ ] Stats displayed
- [ ] Admin cards visible
- [ ] Navigation menu works

### Test 17: Admin Users Page
**Steps:**
1. From admin dashboard
2. Click "User Management"
3. Go to `/admin/users`

**Expected Results:**
- [ ] Page loads
- [ ] User table visible
- [ ] User data displayed (when implemented)

### Test 18: Admin Programs Page
**Steps:**
1. From admin dashboard
2. Click "Programs"
3. Go to `/admin/programs`

**Expected Results:**
- [ ] Page loads
- [ ] Program table visible
- [ ] Program data displayed (when implemented)

### Test 19: Admin Enrollments Page
**Steps:**
1. From admin dashboard
2. Click "Enrollments"
3. Go to `/admin/enrollments`

**Expected Results:**
- [ ] Page loads
- [ ] Enrollment table visible
- [ ] Enrollment data displayed (when implemented)

### Test 20: Admin Analytics Page
**Steps:**
1. From admin dashboard
2. Click "Analytics"
3. Go to `/admin/analytics`

**Expected Results:**
- [ ] Page loads
- [ ] Analytics data displayed (when implemented)

---

## Responsive Design Testing

### Test 21: Mobile View (< 768px)
**Steps:**
1. Open DevTools (F12)
2. Toggle device toolbar
3. Select iPhone 12 (390px)
4. Test pages:
   - `/login`
   - `/register`
   - `/checkout`
   - `/user-dashboard`
   - `/admin`

**Expected Results:**
- [ ] All pages responsive
- [ ] Text readable
- [ ] Buttons clickable
- [ ] Forms work
- [ ] No horizontal scroll

### Test 22: Tablet View (768px - 1024px)
**Steps:**
1. Select iPad (768px)
2. Test same pages

**Expected Results:**
- [ ] Layout optimized for tablet
- [ ] Two-column layouts work
- [ ] All elements visible

### Test 23: Desktop View (> 1024px)
**Steps:**
1. Full screen (1920px)
2. Test same pages

**Expected Results:**
- [ ] Full layout displayed
- [ ] Multi-column layouts work
- [ ] All features visible

---

## Error Handling Testing

### Test 24: Invalid Login
**Steps:**
1. Go to `/login`
2. Enter wrong credentials
3. Click "Login"

**Expected Results:**
- [ ] Error message displayed
- [ ] Form not submitted
- [ ] User stays on login page

### Test 25: Invalid Payment
**Steps:**
1. Go to checkout
2. Use invalid card: `4000 0000 0000 0002`
3. Try to pay

**Expected Results:**
- [ ] Payment fails
- [ ] Error message displayed
- [ ] User can retry

### Test 26: Network Error
**Steps:**
1. Stop backend server
2. Try to login

**Expected Results:**
- [ ] Error message displayed
- [ ] User informed of issue
- [ ] Can retry when backend is back

---

## Performance Testing

### Test 27: Page Load Time
**Steps:**
1. Open DevTools Network tab
2. Go to `/programs/meditation`
3. Check load time

**Expected Results:**
- [ ] Page loads in < 3 seconds
- [ ] Images load quickly
- [ ] No 404 errors

### Test 28: API Response Time
**Steps:**
1. Open DevTools Network tab
2. Login to account
3. Check API response times

**Expected Results:**
- [ ] API calls < 500ms
- [ ] No failed requests
- [ ] Proper status codes

---

## Security Testing

### Test 29: Token Security
**Steps:**
1. Login to account
2. Open DevTools Console
3. Check localStorage

**Expected Results:**
- [ ] Token stored in localStorage
- [ ] Token is JWT format
- [ ] Token not exposed in URLs

### Test 30: Protected Routes
**Steps:**
1. Logout
2. Try to access `/user-dashboard`
3. Try to access `/admin`

**Expected Results:**
- [ ] Redirected to `/login`
- [ ] Cannot access protected pages
- [ ] Admin pages require admin role

---

## Browser Compatibility Testing

### Test 31: Chrome
- [ ] All tests pass
- [ ] No console errors
- [ ] Payment works

### Test 32: Firefox
- [ ] All tests pass
- [ ] No console errors
- [ ] Payment works

### Test 33: Safari
- [ ] All tests pass
- [ ] No console errors
- [ ] Payment works

### Test 34: Edge
- [ ] All tests pass
- [ ] No console errors
- [ ] Payment works

---

## Final Verification

### Build Status
- [ ] `npm run build` completes successfully
- [ ] All 59 routes compile
- [ ] No errors or warnings
- [ ] Build time < 15 seconds

### Functionality
- [ ] Authentication works
- [ ] Payment processing works
- [ ] User dashboard works
- [ ] Admin dashboard works
- [ ] All pages responsive

### Performance
- [ ] Page load time < 3 seconds
- [ ] API response time < 500ms
- [ ] No console errors
- [ ] No network errors

### Security
- [ ] Tokens stored securely
- [ ] Protected routes work
- [ ] Admin access restricted
- [ ] Input validation works

---

## Test Results Summary

### Total Tests: 34
- [ ] Passed: ___
- [ ] Failed: ___
- [ ] Skipped: ___

### Overall Status
- [ ] ✅ READY FOR PRODUCTION
- [ ] ⚠️ NEEDS FIXES
- [ ] ❌ NOT READY

---

## Issues Found

### Critical Issues
1. _______________
2. _______________
3. _______________

### Minor Issues
1. _______________
2. _______________
3. _______________

---

## Sign-Off

**Tested By:** _______________  
**Date:** _______________  
**Status:** _______________  

---

## Next Steps

- [ ] Fix any issues found
- [ ] Re-run tests
- [ ] Deploy to staging
- [ ] Deploy to production

---

**Last Updated:** April 6, 2026  
**Test Version:** 1.0

