# Vercel Deployment Setup Guide

## ✅ Vercel Configuration Complete

**Files Created:**
- `vercel.json` - Vercel configuration
- `next.config.ts` - Updated with ISR
- `.env.example` - Environment variable template

---

## Required Environment Variables

### 1. Site Configuration

**NEXT_PUBLIC_SITE_URL**
```
Value: https://cybergloballaw.com
Scope: Production, Preview
```
- Used for canonical URLs
- Used for Open Graph images
- Used for sitemap generation
- Must be HTTPS in production

---

### 2. Email (Resend)

**RESEND_API_KEY**
```
Value: re_xxxxxxxxxxxxx
Scope: Production, Preview
Type: Secret
```
- Get from: https://resend.com/api-keys
- Required for contact form
- Required for email notifications

**FROM_EMAIL**
```
Value: contact@cybergloballaw.com
Scope: Production, Preview
```
- Verified sender email in Resend
- Must match verified domain

**TO_EMAIL**
```
Value: contact@cybergloballaw.com
Scope: Production
```
- Team inbox for form submissions

**ARCHIVE_EMAIL** (Optional)
```
Value: archive@cybergloballaw.com
Scope: Production
```
- Archive copy of submissions

---

### 3. Spam Protection (Cloudflare Turnstile)

**NEXT_PUBLIC_TURNSTILE_SITE_KEY**
```
Value: 0x4AAAAAAAxxxxxxxxxx
Scope: Production, Preview
Type: Public
```
- Get from: Cloudflare Turnstile dashboard
- Public key (safe to expose)

**TURNSTILE_SECRET_KEY**
```
Value: 0x4AAAAAAAxxxxxxxxxx
Scope: Production, Preview
Type: Secret
```
- Get from: Cloudflare Turnstile dashboard
- Secret key (keep private)
- Used for server-side verification

---

### 4. Scheduling (Cal.com)

**NEXT_PUBLIC_CALCOM_LINK**
```
Value: cyberglobal-law/consultation
Scope: Production, Preview
Type: Public
```
- Format: username/event-slug
- Get from Cal.com booking page
- Used for embed and links

---

### 5. Notifications (Slack) - Optional

**SLACK_WEBHOOK_URL**
```
Value: https://hooks.slack.com/services/T00000000/B00000000/xxxxxxxxxxxxxxxxxxxx
Scope: Production
Type: Secret
```
- Get from: Slack Incoming Webhooks
- Optional (form works without it)
- Sends rich notifications to team channel

---

### 6. Analytics (PostHog) - Optional

**NEXT_PUBLIC_POSTHOG_KEY**
```
Value: phc_xxxxxxxxxxxxx
Scope: Production, Preview
Type: Public
```
- Get from: PostHog project settings
- Optional (Vercel Analytics works without it)
- Requires posthog-js package

**NEXT_PUBLIC_POSTHOG_HOST**
```
Value: https://app.posthog.com
Scope: Production, Preview
```
- Default: https://app.posthog.com
- Can be self-hosted instance

---

### 7. Rate Limiting (Upstash Redis) - Optional

**UPSTASH_REDIS_REST_URL**
```
Value: https://xxxxxxxxxxxxx.upstash.io
Scope: Production
Type: Secret
```
- Get from: Upstash Redis console
- Optional (in-memory limiter works without it)
- For distributed rate limiting

**UPSTASH_REDIS_REST_TOKEN**
```
Value: xxxxxxxxxxxxx
Scope: Production
Type: Secret
```
- Get from: Upstash Redis console
- API token for REST access

---

## Vercel Deployment Steps

### 1. Connect Repository

1. Push code to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Select "cyberglobal-law" folder (if monorepo)
5. Framework: Next.js (auto-detected)
6. Build command: `npm run build`
7. Install command: `npm install --legacy-peer-deps`

---

### 2. Configure Environment Variables

**In Vercel Dashboard:**

1. Go to Project Settings → Environment Variables
2. Add each variable:
   - Name: Variable name (e.g., `RESEND_API_KEY`)
   - Value: Your actual value
   - Environments: Select Production, Preview, or both
   - Type: Secret (for sensitive) or Plain

**Required for Production:**
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
FROM_EMAIL=contact@cybergloballaw.com
TO_EMAIL=contact@cybergloballaw.com
NEXT_PUBLIC_SITE_URL=https://cybergloballaw.com
NEXT_PUBLIC_CALCOM_LINK=cyberglobal-law/consultation
```

**Optional (Recommended):**
```
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAxxxxxxxxxx
TURNSTILE_SECRET_KEY=0x4AAAxxxxxxxxxx
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxx
ARCHIVE_EMAIL=archive@cybergloballaw.com
```

---

### 3. Configure Domains

**Production Domain:**
1. Add custom domain: `cybergloballaw.com`
2. Add www redirect: `www.cybergloballaw.com` → `cybergloballaw.com`
3. Verify DNS settings (A record or CNAME)
4. Enable HTTPS (automatic with Vercel)

**Preview Domains:**
- Automatic: `project-git-branch-team.vercel.app`
- Custom preview domains (optional)

---

### 4. Build Settings

**Framework Preset:** Next.js

**Build Command:**
```bash
contentlayer build && next build --turbopack
```

**Output Directory:** `.next` (default)

**Install Command:**
```bash
npm install --legacy-peer-deps
```

**Node Version:** 20.x (automatic)

---

## Preview Deployments

### ✅ Automatic Preview URLs

**On Every Push:**
- Creates unique preview URL
- `https://cyberglobal-law-git-branch-team.vercel.app`
- Full environment variables
- Real integrations (Resend, Cal.com)

**On Pull Requests:**
- Comment with preview URL
- Full feature testing
- Shareable with team/clients

**Benefits:**
- Test before merging
- Share with stakeholders
- No production impact
- Real data/integrations

---

## ISR Configuration for MDX

### ✅ Incremental Static Regeneration

**File:** `next.config.ts`

```typescript
experimental: {
  staleTimes: {
    dynamic: 0,      // Dynamic routes: always fresh
    static: 180,     // Static routes: 3-minute cache
  },
}
```

**How ISR Works:**

1. **First Request:**
   - Page generated statically
   - Served immediately
   - Cached for 3 minutes

2. **Within 3 Minutes:**
   - Cached version served (fast)
   - No regeneration

3. **After 3 Minutes:**
   - First request gets cached version (fast)
   - Background regeneration triggered
   - Next request gets fresh version

**Benefits:**
- Fast page loads (cached)
- Fresh content (background updates)
- No build needed for content changes
- Scales infinitely

---

### MDX Pages with ISR:

**Services Page:**
```tsx
// Will use ISR if using Contentlayer
export const revalidate = 180; // 3 minutes
```

**Legal Pages:**
```tsx
// Privacy and Terms can be cached longer
export const revalidate = 3600; // 1 hour
```

**Homepage:**
```tsx
// Frequently updated, shorter cache
export const revalidate = 180; // 3 minutes
```

---

## Caching Strategy

### Static Assets:
```
/_next/static/ → Cache-Control: public, max-age=31536000, immutable
/images/ → Cache-Control: public, max-age=31536000, immutable
/fonts/ → Cache-Control: public, max-age=31536000, immutable
```

### Pages:
```
/ → ISR (3 min revalidate)
/about → ISR (3 min)
/services → ISR (3 min)
/legal/privacy → ISR (1 hour)
```

### API Routes:
```
/api/contact → No cache (dynamic)
/api/og → Cache (1 hour, varies by params)
```

---

## Vercel Analytics

### ✅ Automatic Features:

**Web Analytics:**
- Pageviews
- Unique visitors
- Top pages
- Referrers
- Geography

**Speed Insights:**
- Real User Monitoring (RUM)
- Core Web Vitals
- LCP, FCP, CLS, FID, TTFB
- Performance scores

**Logs:**
- Function execution logs
- Error tracking
- Build logs

---

## Deployment Workflow

### Git-Based Deployments:

**Main Branch:**
```
git push origin main
→ Automatic production deployment
→ URL: https://cybergloballaw.com
→ Full environment variables
→ ISR enabled
```

**Feature Branches:**
```
git push origin feature-branch
→ Automatic preview deployment
→ URL: https://project-git-feature-branch-team.vercel.app
→ Preview environment variables
→ Full testing capabilities
```

**Pull Requests:**
```
Create PR
→ Preview deployment created
→ Comment with URL added to PR
→ CI tests run
→ Merge when tests pass
```

---

## Vercel.json Configuration

**File:** `vercel.json`

### Features:

**Build Configuration:**
- Build command specified
- Install command with --legacy-peer-deps
- Framework: Next.js

**Regions:**
- Primary: fra1 (Frankfurt, EU)
- Closest to target audience
- GDPR-friendly (EU data residency)

**Headers:**
- DNS prefetch control
- Additional headers via middleware.ts

**Redirects:**
- `/home` → `/` (permanent)
- Add more as needed

---

## Post-Deployment Checklist

### Immediate (After First Deploy):

- [ ] Verify all pages load (8 pages)
- [ ] Test contact form submission
- [ ] Check email delivery (Resend)
- [ ] Test Cal.com embed
- [ ] Verify Turnstile appears
- [ ] Check Slack notifications
- [ ] Test all CTAs (tel: links, buttons)
- [ ] Verify OG images generate
- [ ] Check sitemap.xml accessible
- [ ] Test robots.txt

### SEO Setup:

- [ ] Submit sitemap to Google Search Console
- [ ] Verify canonical URLs
- [ ] Test Open Graph with Facebook Debugger
- [ ] Test Twitter Cards
- [ ] Check JSON-LD with Rich Results Test
- [ ] Set up Google Analytics (if using)
- [ ] Configure search console properties

### Monitoring:

- [ ] Enable Vercel Analytics
- [ ] Set up error tracking (Sentry optional)
- [ ] Configure uptime monitoring
- [ ] Set up alert notifications
- [ ] Monitor Core Web Vitals
- [ ] Track form submissions

---

## Environment Variable Setup in Vercel

### Via Dashboard:

1. Go to Project Settings
2. Click "Environment Variables"
3. Add each variable:

**Format:**
```
Name: RESEND_API_KEY
Value: re_xxxxxxxxxxxxx
Environment: Production, Preview
Type: Secret
```

**Repeat for all variables**

### Via CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Add environment variables
vercel env add RESEND_API_KEY
# Paste value, select environments

vercel env add NEXT_PUBLIC_SITE_URL
# Paste value

# ... repeat for all vars
```

---

## Production vs Preview Environments

### Production (`main` branch):
```bash
NEXT_PUBLIC_SITE_URL=https://cybergloballaw.com
TO_EMAIL=contact@cybergloballaw.com
SLACK_WEBHOOK_URL=https://hooks.slack.com/...  # Real channel
# All real values
```

### Preview (feature branches):
```bash
NEXT_PUBLIC_SITE_URL=https://preview.vercel.app
TO_EMAIL=dev@cybergloballaw.com  # Dev inbox
SLACK_WEBHOOK_URL=https://hooks.slack.com/...  # Test channel
# Can use test values
```

**Benefit:** Safe testing without affecting production

---

## ISR for MDX Pages

### Enable Revalidation:

**For pages using Contentlayer:**
```tsx
// app/services/page.tsx
export const revalidate = 180; // 3 minutes

export default function ServicesPage() {
  const services = allServices.sort((a, b) => a.order - b.order);
  // ... render
}
```

**For legal pages:**
```tsx
// app/legal/privacy/page.tsx
export const revalidate = 3600; // 1 hour (rarely changes)
```

**For dynamic pages:**
```tsx
// app/about/page.tsx
export const revalidate = 300; // 5 minutes
```

---

## Vercel Edge Config (Optional)

### For Real-Time Updates:

**Use Case:** Feature flags, A/B testing, urgent content changes

```typescript
// If using Edge Config
import { get } from '@vercel/edge-config';

export default async function Page() {
  const maintenanceMode = await get('maintenance');
  if (maintenanceMode) {
    return <MaintenancePage />;
  }
  // ... normal page
}
```

---

## Deployment Regions

### Primary Region:
**fra1** (Frankfurt, Germany)
- EU data residency
- GDPR compliant
- Low latency for EU users
- Close to target audience

### Edge Functions:
- Deployed globally
- `/api/og` runs on edge
- Middleware runs on edge
- Fast worldwide

---

## Cache Headers

### Automatic (Vercel):
```
Cache-Control: public, max-age=0, must-revalidate
X-Vercel-Cache: HIT | MISS | STALE
```

### Custom (via next.config.ts):
```typescript
headers: async () => [
  {
    source: '/api/og/:path*',
    headers: [
      {
        key: 'Cache-Control',
        value: 'public, max-age=3600, s-maxage=3600',
      },
    ],
  },
],
```

---

## Preview Deployment Features

### ✅ Enabled by Default:

- **Unique URLs** - Every branch gets a URL
- **Password Protection** - Optional for sensitive previews
- **Comments** - Vercel bot comments on PRs
- **Visual Regression** - Compare screenshots
- **Lighthouse Scores** - Automatic performance checks

### Configuration:

**Disable for specific branches:**
```json
// vercel.json
{
  "github": {
    "silent": true,
    "autoAlias": false
  }
}
```

**Password protect previews:**
```
Project Settings → Deployment Protection → Password
```

---

## Performance on Vercel

### ✅ Automatic Optimizations:

- **Brotli Compression** - Smaller assets
- **Image Optimization** - AVIF/WebP conversion
- **Font Optimization** - Subset generation
- **Code Splitting** - Automatic
- **Edge Caching** - Global CDN
- **HTTP/2** - Multiplexing
- **Smart CDN** - Geographic routing

### Edge Middleware:
- Security headers (via middleware.ts)
- Runs on every request
- No origin roundtrip
- ~0ms overhead

---

## Monitoring & Observability

### Vercel Dashboard:

**Deployments:**
- Build logs
- Deployment status
- Git commits
- Preview URLs

**Analytics:**
- Real User Monitoring
- Core Web Vitals
- Top pages
- Traffic sources

**Functions:**
- Execution logs
- Error rates
- Duration metrics
- Invocation counts

**Speed Insights:**
- LCP, FCP, CLS, FID, TTFB
- Per-page breakdown
- Historical trends
- Recommendations

---

## Cost Optimization

### Free Tier Includes:
- Unlimited deployments
- 100GB bandwidth/month
- Automatic HTTPS
- Vercel Analytics
- Preview deployments

### Pro Tier ($20/month):
- Password protection
- Advanced analytics
- Team collaboration
- Priority support
- Increased limits

**Estimate for CyberGlobal Law:**
- Traffic: < 100GB/month
- Functions: < 100GB-Hrs
- **Cost:** Free tier sufficient initially

---

## Troubleshooting

### Build Fails:

**Check:**
- Environment variables set?
- Install command includes --legacy-peer-deps?
- Contentlayer builds successfully?
- No TypeScript errors?

**Fix:**
```bash
# Test locally
npm run build

# Check logs in Vercel dashboard
# Update install command if needed
```

### Environment Variables Not Working:

**Check:**
- Correct variable name (case-sensitive)?
- Selected correct environments?
- NEXT_PUBLIC_ prefix for client-side vars?
- Redeploy after adding vars?

**Fix:**
- Redeploy: `vercel --prod`
- Or push new commit to trigger build

### ISR Not Working:

**Check:**
- `revalidate` export added to page?
- Using static generation (not dynamic)?
- Cache headers correct?

**Fix:**
```tsx
// Add to page
export const revalidate = 180;
```

---

## Deployment Commands

### Initial Deployment:
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Subsequent Deployments:
```bash
# Git-based (recommended)
git push origin main  # Auto-deploys to production

# Manual
vercel --prod
```

---

## DNS Configuration

### For `cybergloballaw.com`:

**A Record:**
```
Type: A
Name: @
Value: 76.76.19.61  (Vercel IP)
TTL: 3600
```

**CNAME for www:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**Or use Vercel DNS:**
- Transfer nameservers to Vercel
- Automatic SSL management
- Easy DNS management

---

## Security Best Practices

### Environment Variables:

✅ **Use Secrets** - For all API keys
✅ **Never Commit** - .env files in .gitignore
✅ **Rotate Keys** - Periodically update
✅ **Minimal Access** - Only required vars per environment
✅ **Audit Logs** - Review who accesses vars

### Deployment Protection:

- **Preview Password** - For sensitive features
- **Deployment Hooks** - Verify before publish
- **Branch Protection** - Require PR reviews
- **CI Checks** - Must pass before deploy

---

## Files Configuration Summary

### vercel.json:
- ✅ Build and install commands
- ✅ Framework detection
- ✅ Region (fra1)
- ✅ Headers
- ✅ Redirects

### next.config.ts:
- ✅ Image optimization (AVIF/WebP)
- ✅ ISR configuration (staleTimes)
- ✅ Typed routes
- ✅ React strict mode

### .env.example:
- ✅ All variables documented
- ✅ Example values
- ✅ Comments explaining each

---

## Quick Start

```bash
# 1. Clone and install
git clone <repo>
cd cyberglobal-law
npm install --legacy-peer-deps

# 2. Set up environment
cp .env.example .env.local
# Edit .env.local with your values

# 3. Test locally
npm run dev
# Open http://localhost:3001

# 4. Build and test production build
npm run build
npm start

# 5. Deploy to Vercel
vercel --prod
```

---

## Summary

✅ **Vercel configuration** - vercel.json created  
✅ **Environment variables** - 11 documented  
✅ **ISR enabled** - 3-minute revalidation for MDX  
✅ **Preview deployments** - Automatic for all branches  
✅ **Route caching** - Optimized per page type  
✅ **Edge deployment** - fra1 region (EU)  
✅ **Build command** - Contentlayer + Next.js  
✅ **Install command** - --legacy-peer-deps  

---

**Vercel deployment is fully configured and ready!** 🚀

Follow the steps above to deploy to production!

