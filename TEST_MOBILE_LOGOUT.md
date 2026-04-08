# Test Mobile Logout Button

## Quick Test (2 minutes)

### Step 1: Open Mobile View
- Open website in browser
- Press F12 to open DevTools
- Press Ctrl+Shift+M (Windows) or Cmd+Shift+M (Mac) to enable device emulation
- Select "iPhone 12" or similar mobile device

### Step 2: Login
- Click "Login →" button
- Enter test email and password
- Click "Login" button
- Should redirect to home page

### Step 3: Test Logout
- Click hamburger menu (☰) at top right
- Scroll down in menu
- Look for "Logout" button
- Click "Logout" button
- Should redirect to home page
- "Login →" button should reappear

### Expected Results
✅ Logout button is visible
✅ Logout button is clickable
✅ Logout button works
✅ Redirects to home page
✅ Login button reappears

## Detailed Test (5 minutes)

### Test 1: Button Visibility
1. Open mobile view
2. Login
3. Open hamburger menu
4. Scroll down
5. Verify "Logout" button is visible
6. Verify button is full width
7. Verify button is centered

### Test 2: Button Clickability
1. Open mobile view
2. Login
3. Open hamburger menu
4. Hover over "Logout" button
5. Verify cursor changes to pointer
6. Click button
7. Verify button responds to click

### Test 3: Logout Functionality
1. Open mobile view
2. Login
3. Open hamburger menu
4. Click "Logout" button
5. Verify page redirects to home
6. Verify "Login →" button reappears
7. Verify user is logged out

### Test 4: Multiple Devices
Test on:
- [ ] iPhone SE (375px)
- [ ] iPhone 12 (390px)
- [ ] iPhone 14 Pro (393px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)

### Test 5: Different Browsers
Test on:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

## Debugging

### If Button Doesn't Appear
1. Check if you're logged in
2. Check if hamburger menu opens
3. Scroll down in menu
4. Check browser console for errors

### If Button Doesn't Respond
1. Open DevTools (F12)
2. Go to Console tab
3. Click logout button
4. Look for error messages
5. Check if button has correct CSS

### If Logout Doesn't Work
1. Check browser console for errors
2. Check network tab for failed requests
3. Try refreshing page
4. Try clearing cache
5. Try different browser

## Success Criteria

✅ Button is visible on mobile
✅ Button is full width
✅ Button is centered
✅ Button is clickable
✅ Button responds to clicks
✅ Logout works
✅ Redirects to home
✅ Login button reappears
✅ No console errors
✅ Works on all devices

## Report Issues

If you find any issues:
1. Note the device/screen size
2. Note what happens when you click
3. Take a screenshot
4. Check browser console for errors
5. Report with this information
