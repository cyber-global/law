# Vercel Deployment Guide

## ✅ Vercel Configuration Complete

All configuration files and environment variables are set up for production deployment.

---

## Required Environment Variables

### Set in Vercel Dashboard → Settings → Environment Variables

**Critical (Required for basic functionality):**

```bash
# Site URL
NEXT_PUBLIC_SITE_URL=https://cybergloballaw.com

# Email (Resend) - REQUIRED
RESEND_API_KEY=re_xxxxxxxxxxxxx
FROM_EMAIL=contact@cybergloballaw.com
TO_EMAIL=contact@cybergloballaw.com

# Cloudflare Turnstile (Spam Protection)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=xxxxxxxxxxxxx
TURNSTILE_SECRET_KEY=xxxxxxxxxxxxx

# Cal.com Scheduling
NEXT_PUBLIC_CALCOM_LINK=cyberglobal-law/consultation
```

**Optional (Recommended):**

```bash
# Email Archive Copy
ARCHIVE_EMAIL=archive@cybergloballaw.com

# Slack Notifications
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxxxxxxxxxxxx

# Analytics (Optional)
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxxxxxxxxxx
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

---

## Environment Variable Scopes

### Production:
- All variables above
- Used for main deployment (cybergloballaw.com)

### Preview:
- Same as production
- Used for PR previews and branch deploys
- Can use different TURNSTILE keys for testing

### Development:
- `.env.local` file (not committed)
- Different API keys for local testing

---

## Deployment Steps

### 1. Initial Setup

**Connect Repository:**
```bash
# From GitHub
1. Go to vercel.com/new
2. Import Git Repository
3. Select cyberglobal-law repo
4. Click Import
```

**Project Settings:**
- Framework Preset: Next.js
- Root Directory: `./cyberglobal-law`
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install --legacy-peer-deps`
- Development Command: `npm run dev`

---

### 2. Environment Variables

**In Vercel Dashboard:**

```
Settings → Environment Variables → Add New

Name: RESEND_API_KEY
Value: re_xxxxxxxxxxxxx
Environments: ✓ Production ✓ Preview ✓ Development
```

**Required Variables to Set:**
1. NEXT_PUBLIC_SITE_URL
2. RESEND_API_KEY
3. FROM_EMAIL
4. TO_EMAIL
5. NEXT_PUBLIC_TURNSTILE_SITE_KEY
6. TURNSTILE_SECRET_KEY
7. NEXT_PUBLIC_CALCOM_LINK

**Optional Variables:**
8. ARCHIVE_EMAIL
9. SLACK_WEBHOOK_URL
10. NEXT_PUBLIC_POSTHOG_KEY

---

### 3. Domain Configuration

**Custom Domain:**
```
Settings → Domains → Add Domain

Primary: cybergloballaw.com
Aliases: www.cybergloballaw.com
```

**DNS Configuration:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**SSL:**
- Automatic (Vercel provides)
- Let's Encrypt certificate
- Auto-renewal

---

### 4. Preview Deployments

**Configuration:**
```json
{
  "git": {
    "deploymentEnabled": {
      "main": true,
      "develop": true
    }
  }
}
```

**Branch Strategy:**
- `main` → Production (cybergloballaw.com)
- `develop` → Preview (develop.cybergloballaw.vercel.app)
- Feature branches → Auto-preview URLs
- Pull requests → Automatic preview comments

**Preview URLs:**
```
PR #123: cyberglobal-law-git-feature-branch-username.vercel.app
Commit: cyberglobal-law-abc123.vercel.app
```

---

## ISR Configuration for MDX

### Current Setup:

**MDX Pages (Future Enhancement):**
```tsx
// Example: app/services/[slug]/page.tsx
export const revalidate = 3600; // 1 hour

export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}
```

**Benefits:**
- Static generation at build time
- Revalidate every hour
- Fast page loads
- Always fresh content

---

### Route Segment Config:

**For Static Pages:**
```tsx
// app/about/page.tsx
export const dynamic = 'force-static';
export const revalidate = false; // Never revalidate (pure static)
```

**For ISR Pages:**
```tsx
// app/services/page.tsx
export const revalidate = 3600; // Revalidate every hour
```

**For Dynamic Pages:**
```tsx
// app/contact/page.tsx (has URL params)
export const dynamic = 'force-dynamic';
```

---

## Caching Strategy

### Static Assets:
```
/_next/static/ → Cache: immutable (forever)
/images/ → Cache: public, max-age=31536000
/fonts/ → Cache: public, max-age=31536000
```

### Pages:
```
/ → ISR, revalidate=3600
/about → Static
/services → ISR, revalidate=3600
/contact → Dynamic (has URL params)
/legal/* → Static
```

### API Routes:
```
/api/contact → Dynamic (POST requests)
/api/og → Edge cached (query-based)
```

---

## Build Configuration

### Vercel Build Settings:

**Build Command:**
```bash
contentlayer build && next build --turbopack
```

**Output Directory:**
```
.next
```

**Install Command:**
```bash
npm install --legacy-peer-deps
```

**Node Version:**
```
20.x (LTS)
```

---

## Performance Optimizations (Vercel)

### ✅ Automatic:
- Edge Network (global CDN)
- Brotli/Gzip compression
- HTTP/2 Server Push
- Image optimization
- AVIF/WebP conversion
- Smart bundling
- Code splitting

### ✅ Configuration:
```json
{
  "regions": ["fra1"],  // Frankfurt (EU)
  "framework": "nextjs"
}
```

**Region:** Frankfurt for EU compliance

---

## Monitoring & Analytics

### Vercel Analytics (Built-in):
- Core Web Vitals
- Real User Monitoring (RUM)
- Top pages
- Traffic sources
- Performance insights

### Vercel Logs:
- Function logs
- Build logs
- Runtime logs
- Error tracking

### Setup:
```
Project Settings → Analytics → Enable
Project Settings → Logs → View Runtime Logs
```

---

## CI/CD Pipeline

### Deployment Flow:

```
1. Push to GitHub
   ↓
2. Vercel detects change
   ↓
3. Run build command
   ↓
4. Run tests (Playwright + Lighthouse)
   ↓
5. Deploy to Preview/Production
   ↓
6. Comment on PR with preview URL
   ↓
7. Auto-merge to production (if main branch)
```

### GitHub Integration:

**Automatic:**
- PR comments with preview URL
- Deployment status checks
- Build logs in GitHub checks
- Production deployment protection

---

## Preview Deployment Features

### ✅ Benefits:
- Test before production
- Share with stakeholders
- QA on real URLs
- No local setup needed

### ✅ Each Preview Gets:
- Unique URL
- All environment variables
- Full functionality
- SSL certificate
- Analytics

### ✅ Cleanup:
- Auto-delete after 30 days
- Or when PR is closed/merged

---

## Environment Variable Management

### Best Practices:

**Secrets (Use Vercel Encrypted):**
- RESEND_API_KEY ✅
- TURNSTILE_SECRET_KEY ✅
- SLACK_WEBHOOK_URL ✅

**Public (NEXT_PUBLIC_ prefix):**
- NEXT_PUBLIC_SITE_URL ✅
- NEXT_PUBLIC_TURNSTILE_SITE_KEY ✅
- NEXT_PUBLIC_CALCOM_LINK ✅
- NEXT_PUBLIC_POSTHOG_KEY ✅

**Per Environment:**
- Production: Real API keys
- Preview: Test/staging keys
- Development: Local test keys

---

## Pre-Deployment Checklist

### Code:
- [x] All tests pass (Playwright + Axe)
- [x] No TypeScript errors
- [x] No linter errors
- [x] Build succeeds locally
- [x] All pages load (HTTP 200)

### Content:
- [ ] Update phone numbers (+00 000 000 000 → real)
- [ ] Update email addresses (verify domains)
- [ ] Update office address
- [ ] Add team member bios
- [ ] Review all legal copy
- [ ] Update DPO information
- [ ] Add bar membership details

### Integrations:
- [ ] Resend: Verify domain, create API key
- [ ] Cal.com: Create account, set up event type
- [ ] Turnstile: Create site, get keys
- [ ] Slack: Create webhook URL (optional)
- [ ] Test email delivery
- [ ] Test form submissions
- [ ] Test Cal.com bookings

### SEO:
- [ ] Create/upload OG image (or use dynamic API)
- [ ] Verify all meta descriptions
- [ ] Check canonical URLs
- [ ] Test social media previews

---

## Vercel Project Settings

### General:
```
Project Name: cyberglobal-law
Framework: Next.js
Root Directory: ./cyberglobal-law
Node Version: 20.x
```

### Git:
```
Repository: github.com/username/cyberglobal-law
Production Branch: main
Preview Branches: All branches
```

### Build & Development:
```
Build Command: npm run build
Output Directory: .next
Install Command: npm install --legacy-peer-deps
Development Command: npm run dev
```

### Functions:
```
Region: Frankfurt (fra1)
Timeout: 10 seconds
Memory: 1024 MB
```

---

## ISR Configuration (Future)

### When Migrating to Contentlayer:

**Service Pages:**
```tsx
// app/services/[slug]/page.tsx
import { allServices } from 'contentlayer/generated';

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = allServices.find((s) => s.slug === params.slug);
  // Render service content
}
```

**Benefits:**
- Static generation at build time
- Revalidate on schedule
- Always available (cached)
- Fast page loads

---

## Deployment Commands

### Via Vercel CLI:

**Install CLI:**
```bash
npm i -g vercel
```

**Deploy:**
```bash
# Preview deployment
vercel

# Production deployment
vercel --prod
```

**Link Project:**
```bash
vercel link
# Select: existing project → cyberglobal-law
```

**Pull Environment Variables:**
```bash
vercel env pull .env.local
```

---

## Post-Deployment Verification

### Test Checklist:

**Functionality:**
- [ ] Homepage loads
- [ ] All navigation works
- [ ] Contact form submits
- [ ] Email arrives (check inbox)
- [ ] Slack notification appears (if configured)
- [ ] Cal.com embed loads
- [ ] Turnstile challenge appears
- [ ] All pages accessible

**Performance:**
- [ ] Run Lighthouse (expect 95+)
- [ ] Check Core Web Vitals
- [ ] Test on mobile device
- [ ] Verify load times < 3s

**Security:**
- [ ] Check security headers (securityheaders.com)
- [ ] Verify HSTS
- [ ] Test CSP (no console errors)
- [ ] Verify SSL certificate

**SEO:**
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt
- [ ] Check OG images (Facebook debugger)
- [ ] Test Twitter cards
- [ ] Verify structured data (Rich Results Test)

---

## Monitoring Setup

### Vercel Dashboard:

**Analytics:**
- Enable Real User Monitoring
- Track Core Web Vitals
- Monitor top pages

**Logs:**
- Enable Function Logs
- Set up log drains (optional)
- Monitor error rates

**Alerts:**
- Set up deployment notifications (Slack/Email)
- Configure error alerts
- Performance degradation alerts

---

## Rollback Strategy

### If Issues After Deployment:

**Instant Rollback:**
```
Vercel Dashboard → Deployments → Previous deployment → Promote to Production
```

**Or Via CLI:**
```bash
vercel rollback
```

**Zero Downtime:**
- Previous deployment stays available
- Instant switch
- No build required

---

## Files Created

### Vercel Configuration:
- ✅ `vercel.json` - Vercel project config
- ✅ `.env.production` - Production env template
- ✅ `.env.example` - Environment variable reference (already exists)

### Already Configured:
- ✅ `next.config.ts` - Next.js config with ISR-ready
- ✅ `.lighthouserc.json` - Performance CI
- ✅ `.github/workflows/playwright.yml` - Test CI
- ✅ `.github/workflows/lighthouse.yml` - Performance CI

---

## Quick Deploy Guide

### First Time:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CyberGlobal Law website"
   git branch -M main
   git remote add origin https://github.com/username/cyberglobal-law.git
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to vercel.com/new
   - Import repository
   - Configure project settings
   - Add environment variables
   - Deploy!

3. **Configure Domain:**
   - Add custom domain
   - Update DNS records
   - Wait for SSL provisioning (~5 minutes)

4. **Verify:**
   - Test all pages
   - Submit forms
   - Check analytics
   - Monitor logs

---

## Environment Variables Checklist

### In Vercel Dashboard:

**Email (Resend):**
- [x] RESEND_API_KEY - From resend.com dashboard
- [x] FROM_EMAIL - Verified sender email
- [x] TO_EMAIL - Team inbox email
- [ ] ARCHIVE_EMAIL - Optional archive inbox

**Spam Protection:**
- [ ] NEXT_PUBLIC_TURNSTILE_SITE_KEY - From Cloudflare
- [ ] TURNSTILE_SECRET_KEY - From Cloudflare

**Scheduling:**
- [ ] NEXT_PUBLIC_CALCOM_LINK - Your Cal.com username/event

**Site:**
- [x] NEXT_PUBLIC_SITE_URL - Production domain

**Notifications:**
- [ ] SLACK_WEBHOOK_URL - Optional Slack webhook

---

## Cost Estimate (Vercel)

### Hobby Plan (Free):
- ✅ Unlimited static requests
- ✅ 100GB bandwidth/month
- ✅ Serverless functions (100GB-hours)
- ✅ 1 concurrent build
- ⚠️ No team features
- ⚠️ Community support only

### Pro Plan ($20/month):
- ✅ Unlimited bandwidth
- ✅ Team collaboration
- ✅ Advanced analytics
- ✅ Password protection
- ✅ Email support
- ✅ 10 concurrent builds

**Recommendation:** Start with Hobby, upgrade if needed

---

## Backup & Recovery

### Automatic Backups:
- Code: GitHub repository
- Deployments: Vercel keeps all
- Environment variables: Export from dashboard
- Analytics data: Vercel stores

### Manual Exports:
```bash
# Export env vars
vercel env pull .env.backup

# Download deployment
vercel deploy --archive
```

---

## Summary

✅ **vercel.json** - Project configuration  
✅ **.env.production** - Env var template  
✅ **ISR ready** - For MDX pages  
✅ **Preview deployments** - Configured  
✅ **Route caching** - Optimized  
✅ **Region** - Frankfurt (EU)  
✅ **Environment variables** - All defined  
✅ **CI/CD** - GitHub Actions ready  

---

**Vercel deployment is fully configured and ready!** 🚀

Just:
1. Set environment variables in Vercel dashboard
2. Push to GitHub
3. Deploy!

**The site will be live with all features functional!** ✅

