# AI Content Creation Platform PRD

## Overview

A powerful AI-powered content creation platform called Lume Studios that helps users generate high-quality blog posts, marketing copy, and social media content. The platform uses advanced AI to create content based on user inputs including keywords, tone, target audience, and industry-specific requirements.

## Problem Statement

Lume Studios is a platform that helps users generate high-quality blog posts, marketing copy, and social media content. The platform uses advanced AI to create content based on user inputs including keywords, tone, target audience, and industry-specific requirements.

## Target Users

- Content marketers
- Social media managers
- Business owners
- Marketing agencies
- Freelance writers

## Core Features

### Authentication & User Management

- User registration and login functionality
- Role-based access control (Free vs Premium users)
- User profile management
- Workspace settings and preferences

### Content Generation

- Multi-format content generation:
  - Blog posts
  - Marketing copy
  - Social media content
- Industry-specific templates
- Customizable tone and style settings
- SEO optimization tools

### Workspace & Organization

- Saved drafts and version history
- Template management
- Project organization
- Content calendar integration

### Analytics & Reporting

- Content performance metrics
- Usage statistics
- SEO performance tracking
- Export capabilities

## User Flow

### 1. Onboarding

- Welcome screen with tutorial/video
- Profile setup
  - Use case selection
  - Tone preferences
  - Industry selection
- Template showcase

### 2. Dashboard

- Recent drafts
- Quick-access content creation
- Analytics overview
- Saved templates

### 3. Content Creation

#### Step 1: Content Type Selection

- Content format choice
- Template selection

#### Step 2: Input Configuration

- Topic/idea input
- Keywords
- Tone selection
- Length preferences

#### Step 3: Generation & Customization

- Real-time preview
- Editable sections
- Dynamic content adjustments

#### Step 4: Content Refinement

- Grammar checking
- Plagiarism detection
- SEO optimization

#### Step 5: Export & Publishing

- Multiple export formats
- Direct publishing integrations

## Subscription Tiers

### Free Tier

- Limited monthly generations
- Basic templates
- Standard editing tools

### Pro Plan

- Unlimited generations
- Advanced editing tools
- Premium templates
- Full analytics suite

### Enterprise Plan

- Team collaboration features
- Priority support
- API access
- Custom integrations

## Technical Requirements

### Architecture

#### Frontend

- Next.js 14+ (App Router) for server-side rendering and routing
- TypeScript for type safety
- State management using React Context + Zustand/Jotai
- Tailwind CSS for styling
- Next.js API routes for backend functionality
- Vercel deployment for optimal Next.js performance

#### Database & Storage

- Primary Database: PostgreSQL with Prisma ORM
  - User data
  - Content metadata
  - Subscription information
  - Analytics data
- Redis
  - Rate limiting
  - Caching
  - Session management
- Vector Database (Supabase)
  - Semantic search
  - Content similarity matching

#### AI/ML Infrastructure

- Anthropic Claude API integration
  - Claude 3 Opus for high-quality content generation
  - Claude 3 Sonnet for real-time suggestions and drafts
  - Claude 3 Haiku for quick edits and suggestions
- Langchain.js for AI workflow management
- Vector embeddings for content analysis

#### Infrastructure

- Vercel for hosting and deployment
- Edge Functions for global performance
- Vercel KV (Redis) for caching
- Supabase for database and vector database
- GitHub Actions for CI/CD

#### Essential Third-party Services

- Stripe for subscription management
- NextAuth.js for authentication
- Resend for transactional emails
- Vercel Analytics for privacy-focused analytics
- Upstash for rate limiting

#### Security Requirements

- Next.js middleware for authentication
- Edge Config for sensitive configurations
- CORS policies
- Rate limiting on API routes
- Input sanitization
- XSS protection via Next.js defaults

#### Performance Requirements

- Core Web Vitals optimization
- Static page generation where possible
- Incremental Static Regeneration for dynamic content
- API response times < 500ms
- Image optimization via Next/Image
- Edge caching strategy

#### Monitoring & Error Tracking

- Vercel Analytics for performance monitoring
- Sentry for error tracking
- Axiom for log management
- Status page for system health

## Development Phases

### Phase 1: Foundation (Weeks 1-2)

1. Project Setup

   - Initialize Next.js project setup
   - TypeScript configuration
   - Tailwind CSS setup
   - Basic project structure
   - CI/CD pipeline with GitHub Actions

2. Authentication & User Management

   - NextAuth.js implementation
   - Basic user model in Prisma
   - Login/Register flows
   - User profile basics

3. Database Setup
   - PostgreSQL with Prisma setup
   - Initial schema migration
   - Basic CRUD operations
   - Redis cache configuration

### Phase 2: Core AI Integration (Weeks 3-4)

1. Claude Integration

   - Anthropic API setup and configuration
   - Prompt engineering optimized for Claude
   - Error handling and retry logic
   - Rate limiting implementation
   - Context window optimization
   - Tool use implementation for enhanced capabilities

2. Basic Content Generation
   - Simple text generation endpoint
   - Basic prompt templates
   - Content storage in database
   - Draft saving functionality

### Phase 3: Essential Features (Weeks 5-6)

1. Content Management

   - Draft system
   - Content history
   - Basic templates
   - Content editor integration

2. Subscription System
   - Stripe integration
   - Basic pricing tiers
   - Usage tracking
   - Payment processing

### Phase 4: Enhanced Features (Weeks 7-8)

1. Advanced AI Features

   - Enhanced prompt engineering
   - Multiple content formats
   - Tone customization
   - SEO optimization

2. Analytics Foundation
   - Basic usage metrics
   - Performance tracking
   - User activity logging
   - Simple dashboard

### Phase 5: Polish & Optimization (Weeks 9-10)

1. UI/UX Refinement

   - Loading states
   - Error handling
   - Responsive design
   - Accessibility improvements

2. Performance Optimization
   - Caching strategy
   - API optimization
   - Core Web Vitals
   - Load testing

### Phase 6: Advanced Features (Weeks 11-12)

1. Advanced Analytics

   - Detailed reporting
   - Export functionality
   - Performance metrics
   - Custom dashboards

2. Integration & Export
   - Social media integration
   - Export formats
   - CMS connections
   - API documentation

### Future Phases

1. Enterprise Features

   - Team collaboration
   - Advanced permissions
   - Custom integrations
   - API access

2. Advanced AI Capabilities

   - Custom models
   - Advanced templates
   - Multi-language support
   - Content optimization

3. Enhanced Analytics
   - AI performance metrics
   - Content effectiveness
   - ROI tracking
   - Predictive analytics

## Initial Focus (Week 1)

1. Project setup and repository configuration
2. Basic authentication flow
3. Database schema design
4. Simple AI integration test
5. Basic UI components

Would you like to begin with Phase 1, or would you like more details about any specific phase?

## Database Schema Design

### User

- id: uuid
- email: string
- name: string
- role: enum (free, pro, enterprise)
- createdAt: datetime
- subscription: Subscription relation

### Content

- id: uuid
- userId: uuid
- title: string
- content: text
- type: enum (blog, social, marketing)
- status: enum (draft, published)
- metadata: jsonb
- createdAt: datetime
- updatedAt: datetime

### Template

- id: uuid
- name: string
- industry: string
- type: enum
- promptTemplate: text
- metadata: jsonb

### Subscription

- id: uuid
- userId: uuid
- status: enum
- plan: enum
- currentPeriodStart: datetime
- currentPeriodEnd: datetime

## API Endpoints

### Authentication

- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout

### Content

- POST /api/content/generate
- GET /api/content/[id]
- PUT /api/content/[id]
- DELETE /api/content/[id]
- GET /api/content/history

### Subscription

- POST /api/subscription/create
- GET /api/subscription/status
- POST /api/subscription/cancel

## Environment Variables

NEXT_PUBLIC_APP_URL=
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
ANTHROPIC_API_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
RESEND_API_KEY=
