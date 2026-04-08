# Backend Deployment - Simplified Guide

## ⚠️ Important: Backend is OPTIONAL

Your frontend connects directly to Supabase. The backend is only needed if you want:
- Email sending (newsletters, notifications)
- Custom business logic
- Third-party integrations
- Admin operations requiring service role key

**If you don't need these, skip backend deployment and just deploy the frontend.**

---

## 🔧 Simplified Environment Variables

### What You Need

```env
# Server
NODE_ENV=production
PORT=5001
FRONTEND_URL=https://yourdomain.com

# Supabase (use your production credentials)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# JWT (for backend authentication)
JWT_SECRET=generate_a_strong_random_string_min_32_chars
JWT_EXPIRE=7d

# Email (optional - only if sending emails)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Logging
LOG_LEVEL=info
```

### What You DON'T Need

❌ **PostgreSQL credentials** - Use Supabase instead
❌ **Stripe keys** - Not implemented yet
❌ **API_KEY** - Removed (not used)

---

## 🚀 Quick Deployment (Render)

### Step 1: Prepare Environment Variables

```env
NODE_ENV=production
PORT=5001
FRONTEND_URL=https://yourdomain.com
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
JWT_SECRET=generate_strong_random_string_here
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
LOG_LEVEL=info
```

### Step 2: Deploy to Render

1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `anandbodh-backend`
   - **Root Directory**: `backend-api`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Click "Advanced" and add environment variables
6. Click "Create Web Service"

**Your backend will be live at**: `https://anandbodh-backend.onrender.com`

---

## 📝 Environment Variables Explained

| Variable | Purpose | Example |
|----------|---------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `PORT` | Server port | `5001` |
| `FRONTEND_URL` | Your frontend domain | `https://anandbodh.com` |
| `SUPABASE_URL` | Supabase project URL | `https://xxx.supabase.co` |
| `SUPABASE_ANON_KEY` | Public key for frontend | From Supabase dashboard |
| `SUPABASE_SERVICE_ROLE_KEY` | Admin key for backend | From Supabase dashboard (keep secret!) |
| `JWT_SECRET` | Secret for JWT tokens | Generate random string |
| `JWT_EXPIRE` | Token expiration | `7d` |
| `EMAIL_HOST` | SMTP server | `smtp.gmail.com` |
| `EMAIL_PORT` | SMTP port | `587` |
| `EMAIL_USER` | Email address | `noreply@yourdomain.com` |
| `EMAIL_PASSWORD` | Email password | App-specific password |
| `LOG_LEVEL` | Logging verbosity | `info` or `debug` |

---

## 🔐 How to Get Supabase Keys

1. Go to https://supabase.com
2. Open your project
3. Click "Settings" → "API"
4. Copy:
   - **Project URL** → `SUPABASE_URL`
   - **anon public key** → `SUPABASE_ANON_KEY`
   - **service_role secret** → `SUPABASE_SERVICE_ROLE_KEY`

---

## 🧪 Test Backend After Deployment

```bash
# Test health check
curl https://your-backend-url.onrender.com/health

# Expected response:
# {"status":"OK","timestamp":"2026-04-08T...","environment":"production"}
```

---

## 📧 Email Configuration (Optional)

If you want to send emails:

### Gmail Setup

1. Enable 2-factor authentication on Gmail
2. Generate app-specific password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Copy the generated password
3. Use in `.env`:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=generated_app_password
   ```

### Other Email Providers

- **SendGrid**: Use SMTP credentials from dashboard
- **Mailgun**: Use SMTP credentials from dashboard
- **AWS SES**: Use SMTP credentials from AWS console

---

## 🆘 Troubleshooting

### Backend won't start
- Check all environment variables are set
- Check `NODE_ENV=production`
- Check logs in Render dashboard

### Can't connect to Supabase
- Verify `SUPABASE_URL` is correct
- Verify `SUPABASE_ANON_KEY` is correct
- Check Supabase project is active

### Email not sending
- Verify `EMAIL_USER` and `EMAIL_PASSWORD`
- Check Gmail app-specific password is correct
- Check email configuration in code

### Health check fails
```bash
curl -v https://your-backend-url.onrender.com/health
```

---

## 🎯 What Backend Provides

✅ **Health Check**: `/health` - Monitor if backend is running
✅ **Security**: Rate limiting, input sanitization, validation
✅ **Logging**: Request/response logging, error tracking
✅ **Error Handling**: Proper error responses
✅ **Email**: Ready for sending emails (configure SMTP)
✅ **JWT**: Token-based authentication

---

## 📊 Deployment Checklist

- [ ] Generate strong `JWT_SECRET`
- [ ] Get Supabase keys from dashboard
- [ ] Configure email (optional)
- [ ] Set `NODE_ENV=production`
- [ ] Set `FRONTEND_URL` to your domain
- [ ] Deploy to Render/Railway/Heroku
- [ ] Test health endpoint
- [ ] Monitor logs
- [ ] Setup error alerts

---

## 💡 Do You Really Need Backend?

**Deploy backend if you need:**
- ✅ Email sending (newsletters, notifications)
- ✅ Custom business logic
- ✅ Third-party integrations
- ✅ Admin operations

**Skip backend if:**
- ✅ Frontend + Supabase is enough
- ✅ No email sending needed
- ✅ No custom logic needed

**Current Status**: Frontend works perfectly without backend. Backend is optional.

---

**Last Updated**: April 8, 2026
**Status**: ✅ Ready for deployment (optional)
