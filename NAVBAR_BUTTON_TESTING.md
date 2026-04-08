# Navbar Button Testing Guide

## Navbar Buttons Overview

The navbar has the following buttons and links:

### Desktop Navigation Links
- Programs → `/programs`
- Community → `/community`
- Insights → `/insights`
- About → `/about`
- Careers → `/careers`
- Contact → `/contact`

### Right Side Buttons
- Search (🔍) → `/search`
- Sign In (when not logged in) → `/signin`
- Login (when not logged in) → `/login`
- Welcome, [Name] (when logged in) → `/dashboard`
- Logout (when logged in) → Logs out and redirects to `/`

### Mobile Menu (Hamburger)
- Same links as desktop
- Hamburger menu icon (☰) to toggle menu

## Testing Checklist

### Desktop Navigation Links
- [ ] Click "Programs" → Should navigate to `/programs`
- [ ] Click "Community" → Should navigate to `/community`
- [ ] Click "Insights" → Should navigate to `/insights`
- [ ] Click "About" → Should navigate to `/about`
- [ ] Click "Careers" → Should navigate to `/careers`
- [ ] Click "Contact" → Should navigate to `/contact`

### Desktop Right Side (Not Logged In)
- [ ] Click Search (🔍) → Should navigate to `/search`
- [ ] Click "Sign In" → Should navigate to `/signin`
- [ ] Click "Login →" → Should navigate to `/login`

### Desktop Right Side (Logged In)
- [ ] "Welcome, [Name]" should display your name
- [ ] Click "Welcome, [Name]" → Should navigate to `/dashboard`
- [ ] Click "Logout →" → Should log out and redirect to `/`
- [ ] After logout, "Login →" button should reappear

### Mobile Menu (Not Logged In)
- [ ] Click hamburger (☰) → Menu should open
- [ ] Click "Programs" → Should navigate to `/programs` and close menu
- [ ] Click hamburger again → Menu should open
- [ ] Click "Community" → Should navigate to `/community` and close menu
- [ ] Click hamburger again → Menu should open
- [ ] Click "Insights" → Should navigate to `/insights` and close menu
- [ ] Click hamburger again → Menu should open
- [ ] Click "About" → Should navigate to `/about` and close menu
- [ ] Click hamburger again → Menu should open
- [ ] Click "Careers" → Should navigate to `/careers` and close menu
- [ ] Click hamburger again → Menu should open
- [ ] Click "Search" → Should navigate to `/search` and close menu
- [ ] Click hamburger again → Menu should open
- [ ] Click "Contact" → Should navigate to `/contact` and close menu
- [ ] Click hamburger again → Menu should open
- [ ] Click "Sign In" → Should navigate to `/signin` and close menu
- [ ] Click hamburger again → Menu should open
- [ ] Click "Login" → Should navigate to `/login` and close menu

### Mobile Menu (Logged In)
- [ ] Click hamburger (☰) → Menu should open
- [ ] "Welcome, [Name]" should display your name
- [ ] Click "Welcome, [Name]" → Should navigate to `/dashboard` and close menu
- [ ] Click hamburger again → Menu should open
- [ ] Click "Logout" → Should log out and redirect to `/`
- [ ] After logout, hamburger menu should show "Login" button

### Logout Functionality
- [ ] Login with a test account
- [ ] Click "Logout →" button (desktop)
- [ ] Should redirect to home page (`/`)
- [ ] "Login →" button should reappear
- [ ] Login again
- [ ] Click hamburger menu
- [ ] Click "Logout" button (mobile)
- [ ] Should redirect to home page (`/`)
- [ ] "Login" button should reappear in mobile menu

### Edge Cases
- [ ] Click logo → Should navigate to `/` (home)
- [ ] Logout button should not appear when not logged in
- [ ] Login button should not appear when logged in
- [ ] Menu should close when clicking a link
- [ ] Menu should close when clicking outside (if implemented)
- [ ] Hamburger icon should toggle menu open/close

## Debugging Tips

### If Logout Button Doesn't Work

1. **Check Browser Console**
   - Open DevTools (F12)
   - Go to Console tab
   - Look for any error messages
   - Try clicking logout again and check for errors

2. **Check Network Tab**
   - Open DevTools (F12)
   - Go to Network tab
   - Click logout button
   - Look for any failed requests

3. **Check Application Tab**
   - Open DevTools (F12)
   - Go to Application tab
   - Check Cookies and Local Storage
   - Verify Supabase session is being cleared

4. **Check Page Redirect**
   - After clicking logout, check if page redirects to `/`
   - If not redirecting, check browser console for errors

### If Navigation Links Don't Work

1. **Check URL**
   - Click a link
   - Check if URL changes in address bar
   - If URL doesn't change, link might not be working

2. **Check Page Load**
   - After clicking link, wait for page to load
   - Check if page content changes
   - If content doesn't change, page might not exist

3. **Check Console**
   - Open DevTools (F12)
   - Go to Console tab
   - Look for any error messages

## Common Issues and Solutions

### Issue: Logout button doesn't respond
**Solution**: 
- Try refreshing the page
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors
- Try logging out from mobile menu instead

### Issue: Navigation links don't work
**Solution**:
- Check if page exists (all pages should exist)
- Try clicking different links
- Refresh the page
- Clear browser cache

### Issue: Menu doesn't close after clicking link
**Solution**:
- This is a bug - menu should close automatically
- Manually click hamburger to close
- Refresh page

### Issue: Name doesn't display in navbar
**Solution**:
- Check if you're logged in
- Refresh page
- Check browser console for errors
- Try logging out and logging back in

## Performance Testing

- [ ] Navbar loads quickly
- [ ] Buttons respond immediately to clicks
- [ ] Menu opens/closes smoothly
- [ ] No lag when navigating between pages
- [ ] No console errors

## Browser Compatibility

Test on:
- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

## Mobile Device Testing

Test on:
- [ ] iPhone (iOS)
- [ ] Android phone
- [ ] iPad (iOS)
- [ ] Android tablet

## Success Criteria

✅ All navigation links work
✅ Logout button works and redirects to home
✅ Login/Logout state displays correctly
✅ Mobile menu opens/closes
✅ Mobile menu closes after clicking link
✅ No console errors
✅ Smooth animations
✅ Touch-friendly on mobile

## Reporting Issues

If you find any issues with navbar buttons:

1. Note the button/link that's not working
2. Note what happens when you click it
3. Check browser console for errors
4. Take a screenshot
5. Note your browser and device
6. Report the issue with this information
