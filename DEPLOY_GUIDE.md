# CyberGlobal Law - Vercel Deployment Guide

Complete guide for deploying the CyberGlobal Law website to Vercel.

## 🎯 Prerequisites

### Required Accounts
1. **GitHub Account** - To host your code repository
2. **Vercel Account** - Sign up at https://vercel.com (free to start)
3. **Resend Account** - For email functionality (https://resend.com)
4. **Cal.com Account** - For scheduling (https://cal.com)
5. **Cloudflare Account** (optional) - For Turnstile spam protection

---

## ⚠️ Critical: Update Placeholders Before Deployment

### Phone Numbers
Replace throughout the codebase:
- `+00 000 000 000` or `+0000000000` → Your actual phone number
- Files: All components, pages, legal documents

### Email Addresses
- `contact@cybergloballaw.com` → Your real email
- `privacy@cybergloballaw.com` → Your DPO email
- `archive@cybergloballaw.com` → Your archive email
- Files: Footer, contact page, legal pages, `lib/mail.ts`

### Office Address
- `[Street Address]`, `[City, Country]` → Real address
- Files: Footer, contact page

### DPO Information
- `[Name / Email]` → Actual Data Protection Officer details
- Files: `app/legal/privacy/page.tsx`

### Bar Membership
- `[Bar Association]`, `[Jurisdiction]` → Real membership details
- Files: Footer, about page, legal pages

---

## 🔐 Environment Variables for Vercel

Go to **Vercel Dashboard → Settings → Environment Variables** and add these:

### Essential Variables (Site Won't Work Without These)

```env
# Site URL (replace with your domain)
NEXT_PUBLIC_SITE_URL=https://cybergloballaw.com

# Email (Resend) - CRITICAL for contact form
RESEND_API_KEY=re_xxxxxxxxxxxxx
FROM_EMAIL=contact@cybergloballaw.com
TO_EMAIL=contact@cybergloballaw.com

# Cal.com scheduling
NEXT_PUBLIC_CALCOM_LINK=your-username/consultation
```

### Recommended Variables (For Full Functionality)

```env
# Spam Protection (Turnstile)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=xxxxxxxxxxxxx
TURNSTILE_SECRET_KEY=xxxxxxxxxxxxx

# Optional Notifications
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxx
ARCHIVE_EMAIL=archive@cybergloballaw.com
```

---

## 🔑 How to Get API Keys

### 1. Resend (Email Service)

```
1. Visit: https://resend.com
2. Sign up for free account
3. Add and verify your domain (cybergloballaw.com)
   - Go to Domains → Add Domain
   - Follow DNS setup instructions
4. Go to API Keys → Create API Key
5. Copy the key (starts with "re_")
6. Add to Vercel as RESEND_API_KEY
```

**Important:** You must verify your domain with Resend or emails will not be delivered.

### 2. Cal.com (Scheduling)

```
1. Visit: https://cal.com
2. Create account with your professional email
3. Set up event type: "30-Minute Consultation"
4. Configure:
   - Duration: 30 minutes
   - Availability: Business hours (e.g., Mon-Fri, 9AM-6PM CET)
   - Buffer time: 15 minutes between bookings
   - Location: Video call (Google Meet/Zoom)
5. Your booking link: https://cal.com/username/consultation
6. Add "username/consultation" to Vercel as NEXT_PUBLIC_CALCOM_LINK
```

### 3. Cloudflare Turnstile (Spam Protection) - Optional

```
1. Visit: https://dash.cloudflare.com
2. Navigate to Turnstile → Add Site
3. Settings:
   - Domain: cybergloballaw.com
   - Widget Mode: Managed
   - Theme: Auto (matches your site theme)
4. Copy both Site Key and Secret Key
5. Add to Vercel:
   - NEXT_PUBLIC_TURNSTILE_SITE_KEY (Site Key)
   - TURNSTILE_SECRET_KEY (Secret Key)
```

### 4. Slack Webhook (Notifications) - Optional

```
1. Go to your Slack workspace
2. Browse Apps → Search "Incoming Webhooks"
3. Add to Slack → Choose Channel (#legal or #inquiries)
4. Copy the Webhook URL
5. Add to Vercel as SLACK_WEBHOOK_URL
```

---

## 🚀 Deployment Steps

### Step 1: Prepare Code Repository

```bash
# Navigate to project directory
cd "/Users/maria-antoanetapusoiu/Desktop/CyberGlobal Law/cyberglobal-law"

# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: CyberGlobal Law website ready for deployment"

# Create GitHub repository at https://github.com/new
# Name it: cyberglobal-law
# Then link it:
git remote add origin https://github.com/YOUR_USERNAME/cyberglobal-law.git
git branch -M main
git push -u origin main
```

### Step 2: Import to Vercel

1. Visit https://vercel.com/new
2. Click "Import Git Repository"
3. Select your `cyberglobal-law` repository
4. Configure deployment:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (or `./cyberglobal-law` if repo structure differs)
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install --legacy-peer-deps`
5. Click "Deploy"

### Step 3: Add Environment Variables

In your Vercel project dashboard:

1. Go to **Settings → Environment Variables**
2. For each variable:
   - Enter **Name** (e.g., `RESEND_API_KEY`)
   - Enter **Value** (e.g., `re_your_actual_key`)
   - Select Environments: ✅ Production ✅ Preview ✅ Development
   - Click "Save"
3. Repeat for all required variables

### Step 4: Redeploy with Environment Variables

After adding environment variables:
1. Go to **Deployments** tab
2. Click the three dots (...) next to latest deployment
3. Select "Redeploy"
4. Wait for deployment to complete

---

## 🌐 Custom Domain Setup

### In Vercel Dashboard

1. Go to **Settings → Domains**
2. Add your domains:
   - `cybergloballaw.com`
   - `www.cybergloballaw.com`

### Update DNS Records

At your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):

**For cybergloballaw.com:**
```
Type: A
Name: @ (or root domain)
Value: 76.76.21.21
TTL: 300 (or default)
```

**For www.cybergloballaw.com:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 300 (or default)
```

**SSL Certificate:** Automatically provided by Vercel (Let's Encrypt)

---

## ✅ Post-Deployment Testing Checklist

### Core Functionality Tests

```
□ Visit https://cybergloballaw.com
□ All 8 pages load without errors:
  - Homepage (/)
  - About (/about)
  - Services (/services)
  - Cybersecurity (/cybersecurity)
  - Partners (/partners)
  - Contact (/contact)
  - Privacy Policy (/legal/privacy)
  - Terms (/legal/terms)

□ Contact form functionality:
  - Fill out and submit form
  - Check email delivery (both user and admin emails)
  - Verify Turnstile challenge appears (if enabled)
  - Check Slack notification (if configured)

□ Cal.com integration:
  - Click "Book a Consultation" buttons
  - Verify modal opens with correct Cal.com embed
  - Test booking flow

□ User experience:
  - Toggle between dark/light mode
  - Test mobile responsive design
  - Hover over mega menu (desktop)
  - Test mobile navigation drawer
  - Click all CTA buttons and phone links
```

### Performance & SEO Tests

```
□ Google PageSpeed Insights:
  - Desktop score > 90
  - Mobile score > 85
  - Core Web Vitals: All green

□ Social media previews:
  - Facebook: https://developers.facebook.com/tools/debug
  - Twitter: https://cards-dev.twitter.com/validator
  - LinkedIn: https://www.linkedin.com/post-inspector

□ SEO verification:
  - Sitemap accessible: https://cybergloballaw.com/sitemap.xml
  - Robots.txt working: https://cybergloballaw.com/robots.txt
  - Dynamic OG images: https://cybergloballaw.com/api/og?title=Test
```

---

## 🔍 Google Search Console Setup

### Add Property

1. Visit https://search.google.com/search-console
2. Add property: `cybergloballaw.com`
3. Verify ownership via HTML tag or DNS record
4. Submit sitemap: `https://cybergloballaw.com/sitemap.xml`

### Initial Indexing

```
1. Request indexing for main pages:
   - Homepage
   - Services page
   - About page
   - Contact page

2. Monitor:
   - Coverage report
   - Core Web Vitals
   - Search queries performance
```

---

## 💰 Cost Breakdown

### Free Tiers (Sufficient for Most Law Firms)

- **Vercel Hobby:** FREE
  - Unlimited static sites
  - 100GB bandwidth/month
  - Automatic SSL
  - Global CDN

- **Resend:** FREE
  - 3,000 emails/month
  - 100 emails/day

- **Cal.com:** FREE
  - Unlimited bookings
  - Basic integrations
  - Custom branding

- **Turnstile:** FREE
  - Unlimited challenges
  - Advanced bot protection

### Paid Upgrades (Optional)

- **Domain:** $12-15/year (if you don't own cybergloballaw.com)
- **Vercel Pro:** $20/month (custom domains, team features, analytics)
- **Resend Pro:** $20/month (50,000 emails/month, dedicated IPs)
- **Cal.com Pro:** $12/month (advanced features, workflows)

**Total Monthly Cost:** $0 (+ domain if needed)

---

## 🛠️ Troubleshooting Common Issues

### Deployment Fails

**Error:** Build fails with peer dependency warnings
```bash
# Solution: Use legacy peer deps
npm install --legacy-peer-deps
```

**Error:** Environment variables not working
```
# Solution: Ensure correct variable names
- Check spelling (case sensitive)
- Verify in Vercel dashboard
- Redeploy after adding variables
```

### Contact Form Not Working

**Error:** Emails not being sent
```
# Check:
1. RESEND_API_KEY is correct
2. Domain is verified in Resend dashboard
3. FROM_EMAIL matches verified domain
4. Check Vercel function logs
```

**Error:** Turnstile not appearing
```
# Check:
1. NEXT_PUBLIC_TURNSTILE_SITE_KEY is set
2. Domain matches Turnstile configuration
3. Clear browser cache
```

### Cal.com Integration Issues

**Error:** Booking modal doesn't open
```
# Check:
1. NEXT_PUBLIC_CALCOM_LINK format (username/event-name)
2. Cal.com event is active and published
3. Browser console for JavaScript errors
```

---

## 🔄 Continuous Deployment

### Automatic Deployments

Once connected to GitHub, Vercel automatically:
- Deploys `main` branch to production
- Creates preview deployments for pull requests
- Runs build checks on all branches

### Manual Deployments

```bash
# Deploy specific commit
vercel --prod

# Deploy with specific environment
vercel --prod --env CUSTOM_VAR=value
```

---

## 📞 Support Resources

### Documentation
- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Resend Docs:** https://resend.com/docs

### Community Support
- **Vercel Discord:** https://discord.gg/vercel
- **Next.js GitHub:** https://github.com/vercel/next.js

### Project-Specific Help
- Check `package.json` for all dependencies
- Review `.env.example` for environment variable examples
- Examine `vercel.json` for deployment configuration

---

## 🎉 You're Ready to Deploy!

**Quick Start:**
1. Update placeholders ☑️
2. Get Resend API key ☑️
3. Setup Cal.com ☑️
4. Push to GitHub ☑️
5. Import to Vercel ☑️
6. Add environment variables ☑️
7. Test everything ☑️

**Estimated deployment time:** 30-60 minutes

---

*Last updated: October 2025*
*For technical support or questions about this deployment, refer to the project documentation or create an issue in the GitHub repository.*
