# CyberGlobal Law – Website

Boutique cyber law practice offering 24/7 incident response, GDPR/NIS2/DORA/eIDAS2 compliance, and cross-border data counsel.

## Technology Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Content**: Contentlayer + MDX for content management
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **i18n**: next-intl (English default, Romanian ready)
- **SEO**: next-seo
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── [locale]/          # Internationalized routes
│   ├── api/               # API routes
│   └── globals.css        # Global styles and design tokens
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── content/              # MDX content
│   ├── services/        # Service pages
│   ├── sections/        # Homepage sections
│   ├── faqs/           # FAQ entries
│   ├── legal/          # Legal pages
│   ├── pages/          # Static pages
│   ├── partners/       # Partner profiles
│   └── team/           # Team members
├── lib/                 # Utility functions and configs
│   ├── seo.ts          # SEO configuration
│   └── utils.ts        # Shared utilities
├── public/             # Static assets
├── contentlayer.config.ts  # Contentlayer configuration
├── middleware.ts       # Security headers & routing
└── next.config.ts     # Next.js configuration
```

## Content Management

Content is managed through MDX files in the `content/` directory. Each content type has its own schema defined in `contentlayer.config.ts`.

### Adding New Content

1. Create a new `.mdx` file in the appropriate `content/` subdirectory
2. Add frontmatter with required fields (see existing files for examples)
3. Write your content using Markdown syntax
4. The content will be automatically processed by Contentlayer

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SITE_URL=https://cyberglobal.law
RESEND_API_KEY=your_resend_key
TURNSTILE_SITE_KEY=your_turnstile_site_key
TURNSTILE_SECRET_KEY=your_turnstile_secret
SLACK_WEBHOOK_URL=your_slack_webhook (optional)
```

## Design System

### Colors

- **Primary**: Indigo 600 (#4F46E5) - main CTAs
- **Accent**: Cyan 400 (#22D3EE) - tech highlights
- **Success**: Emerald 500
- **Warning**: Amber 500
- **Destructive**: Rose 500

### Typography

- **Text**: Inter (via next/font)
- **Display**: Lexend (via next/font)

### Border Radius

Default radius is `1rem` (rounded-2xl) for a modern, soft appearance.

## Key Features

- 🌐 Internationalization ready (en/ro)
- 🔒 Security headers and CSP
- ⚡ Optimized performance (ISR, image optimization)
- 📱 Fully responsive design
- ♿ Accessibility-first (WCAG 2.1 AA)
- 🎨 Dark mode support
- 📧 Contact forms with spam protection
- 📅 Cal.com scheduling integration
- 📊 Privacy-friendly analytics

## Performance

Target metrics:
- Lighthouse score: 95+
- LCP: < 2.5s
- CLS: < 0.1
- Zero critical accessibility violations

## Security

- Strict Content Security Policy
- HTTPS only with HSTS
- X-Frame-Options: DENY
- Cloudflare Turnstile on forms
- Rate limiting on API routes

## License

Proprietary - All rights reserved

## Contact

For technical inquiries: dev@cyberglobal.law
