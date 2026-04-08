# Backend Deployment Guide

## ⚠️ Important Note

**The backend is OPTIONAL**. Your frontend connects directly to Supabase, which is the recommended architecture. Deploy the backend only if you need:
- Custom business logic
- Third-party integrations
- Sensitive operations
- Email sending
- Payment processing

---

## 🔧 Backend Environment Variables

### Current Configuration (`backend-api/.env`)

```env
# Server
NODE_ENV=development
PORT=5001
FRONTEND_URL=http://localhost:3000

# Database (PostgreSQL) - NOT NEEDED if using Supabase
DB_HOST=localhost
DB_PORT=5432
DB_NAME=anandbodh
DB_USER=postgres
DB_PASSWORD=postgres

# JWT
JWT_SECRET=your_jwt_secret_key_change_this_in_production
JWT_EXPIRE=7d

# Email (Gmail SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

# API
API_KEY=your_api_key_here

# Logging
LOG_LEVEL=debug
```

---

## 📝 Production Environment Variables

Create a `.env.production` file with these values:

```env
NODE_ENV=production
PORT=5001
FRONTEND_URL=https://yourdomain.com

# Database (if using PostgreSQL)
DB_HOST=your-db-host.com
DB_PORT=5432
DB_NAME=anandbodh_prod
DB_USER=prod_user
DB_PASSWORD=strong_password_here

# JWT - CHANGE THIS!
JWT_SECRET=generate_a_strong_random_string_here_min_32_chars
JWT_EXPIRE=7d

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=noreply@yourdomain.com
EMAIL_PASSWORD=your_app_specific_password

# Stripe (Production Keys)
STRIPE_SECRET_KEY=sk_live_your_production_key
STRIPE_PUBLISHABLE_KEY=pk_live_your_production_key

# API
API_KEY=generate_a_strong_random_api_key

# Logging
LOG_LEVEL=info
```

---

## 🚀 Deployment Options

### Option 1: Render (Recommended for Node.js)

**Pros**: Easy deployment, free tier available, automatic deploys from Git

1. **Create Account**: https://render.com
2. **Connect GitHub**: Link your repository
3. **Create New Web Service**:
   - Name: `anandbodh-backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. **Add Environment Variables**:
   - Go to Environment tab
   - Add all variables from `.env.production`
5. **Deploy**: Click "Create Web Service"

**Cost**: Free tier (512MB RAM, limited), $7/month for production

---

### Option 2: Railway

**Pros**: Simple, good free tier, GitHub integration

1. **Create Account**: https://railway.app
2. **Create New Project**
3. **Add GitHub Repository**
4. **Configure**:
   - Root Directory: `backend-api`
   - Start Command: `npm start`
5. **Add Variables**: In Variables tab, add all environment variables
6. **Deploy**: Automatic on push to main

**Cost**: $5/month credit, pay-as-you-go after

---

### Option 3: Heroku (Legacy but still works)

**Pros**: Simple, good documentation

```bash
# Install Heroku CLI
npm i -g heroku

# Login
heroku login

# Create app
heroku create anandbodh-backend

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your_secret_key
# ... add all other variables

# Deploy
git push heroku main
```

**Cost**: $7/month minimum

---

### Option 4: AWS EC2 (Self-hosted)

**Pros**: Full control, scalable

```bash
# SSH into EC2 instance
ssh -i your-key.pem ec2-user@your-instance-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone your-repo-url
cd anandbodh/backend-api

# Install dependencies
npm install

# Create .env file
nano .env
# Paste production environment variables

# Install PM2 (process manager)
npm i -g pm2

# Start application
pm2 start server.js --name "anandbodh-backend"
pm2 startup
pm2 save

# Setup Nginx reverse proxy (optional)
sudo apt-get install nginx
# Configure nginx to proxy to localhost:5001
```

**Cost**: $5-20/month depending on instance size

---

### Option 5: Docker (Any Platform)

**Create `Dockerfile` in `backend-api/`:**

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 5001

CMD ["npm", "start"]
```

**Build and run:**

```bash
# Build image
docker build -t anandbodh-backend .

# Run container
docker run -p 5001:5001 \
  -e NODE_ENV=production \
  -e JWT_SECRET=your_secret \
  -e FRONTEND_URL=https://yourdomain.com \
  anandbodh-backend
```

**Deploy to:**
- Docker Hub
- AWS ECR
- Google Cloud Run
- Azure Container Registry

---

## 🔐 Security Checklist

Before deploying to production:

- [ ] Change `JWT_SECRET` to a strong random string (min 32 chars)
- [ ] Change `API_KEY` to a strong random string
- [ ] Set `NODE_ENV=production`
- [ ] Use HTTPS only (`FRONTEND_URL` should be https://)
- [ ] Enable CORS only for your frontend domain
- [ ] Use environment variables (never hardcode secrets)
- [ ] Enable rate limiting (already configured)
- [ ] Enable input sanitization (already configured)
- [ ] Enable logging (already configured)
- [ ] Use strong database password
- [ ] Enable database SSL connection
- [ ] Setup email with proper authentication
- [ ] Use Stripe production keys (not test keys)

---

## 📊 Backend Features

The backend includes:

✅ **Security Middleware**
- Rate limiting (100 req/15 min general, 5 req/15 min auth)
- Input sanitization (XSS prevention)
- Input validation (email, password, phone)
- CORS protection
- Helmet security headers

✅ **Logging System**
- Request/response logging
- Error logging with stack traces
- User action tracking
- File-based log storage

✅ **Error Handling**
- Custom error classes
- Global error handler
- Async error wrapper
- Proper HTTP status codes

✅ **Authentication**
- JWT token validation
- Bearer token extraction
- User context in requests

---

## 🧪 Testing Backend

### Local Testing

```bash
# Start backend
npm run dev

# Test health check
curl http://localhost:5001/health

# Expected response:
# {"status":"OK","timestamp":"2026-04-08T...","environment":"development"}
```

### Production Testing

```bash
# Test health check
curl https://your-backend-domain.com/health

# Test with authentication
curl -H "Authorization: Bearer your_token" \
  https://your-backend-domain.com/api/users/profile
```

---

## 📈 Monitoring & Logs

### Render
- Logs available in dashboard
- Real-time monitoring
- Error alerts

### Railway
- Logs in Deployments tab
- Metrics dashboard
- Error tracking

### AWS EC2
```bash
# View logs
pm2 logs

# Monitor processes
pm2 monit

# View specific log file
tail -f logs/info.log
```

---

## 🔄 Continuous Deployment

### GitHub Actions (Automatic Deployment)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Backend

on:
  push:
    branches: [main]
    paths:
      - 'backend-api/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Render
        run: |
          curl -X POST ${{ secrets.RENDER_DEPLOY_HOOK }}
```

---

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Find process using port 5001
lsof -i :5001

# Kill process
kill -9 <PID>
```

### Database Connection Failed
- Check DB_HOST, DB_PORT, DB_USER, DB_PASSWORD
- Verify database is running
- Check firewall rules

### Email Not Sending
- Enable "Less secure app access" in Gmail
- Use app-specific password (not regular password)
- Check EMAIL_USER and EMAIL_PASSWORD

### Stripe Integration Issues
- Use test keys for development
- Use live keys for production
- Check Stripe dashboard for errors

---

## 📞 Support

For issues:
1. Check logs: `pm2 logs` or platform dashboard
2. Verify environment variables are set
3. Test health endpoint: `/health`
4. Check backend documentation in code

---

## ✨ Next Steps

1. Choose deployment platform
2. Set up environment variables
3. Deploy backend
4. Update frontend `NEXT_PUBLIC_API_URL` if needed
5. Test all endpoints
6. Monitor logs and performance
7. Setup automated backups

---

**Status**: ✅ Backend ready for deployment
**Last Updated**: April 8, 2026
