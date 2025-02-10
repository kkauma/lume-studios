# Lume Studios - AI Content Generation Platform

Lume Studios is a powerful AI-powered content generation platform built with modern web technologies. Create engaging content for blogs, social media, emails, and marketing copy with the help of AI.

## Features

- **AI Content Generation**: Leverage Claude AI to create high-quality content
- **Multiple Content Types**: Support for blog posts, social media, emails, and marketing copy
- **Custom Tone Control**: Adjust content tone from professional to casual
- **User Authentication**: Secure authentication with Supabase and NextAuth.js
- **Subscription Management**: Stripe integration for subscription billing
- **Responsive Design**: Modern, responsive UI built with TailwindCSS

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Authentication**: [Supabase Auth](https://supabase.com/auth) & [NextAuth.js](https://next-auth.js.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **AI Integration**: [Anthropic Claude](https://www.anthropic.com/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **UI Components**: Custom components with [Radix UI](https://www.radix-ui.com/)
- **Payment Processing**: [Stripe](https://stripe.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Deployment**: [Vercel](https://vercel.com)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- Supabase account
- Stripe account
- Anthropic API key

## Authentication Flow

1. Users can sign up with email/password
2. Email verification required
3. OAuth providers supported through NextAuth.js
4. Session management with Supabase

## Subscription Plans

- **Free Tier**: Basic content generation
- **Pro Plan**: Advanced features and higher limits
- **Enterprise**: Custom solutions for large teams

## Deployment

The application is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy with `git push`

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request
