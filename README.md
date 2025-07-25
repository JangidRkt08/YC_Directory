<!-- # YC Directory - Next.js Full-Stack Application

Welcome to the **YC Directory** project, a modern full-stack web application built with the latest Next.js features, React 19, and Sanity CMS. This project demonstrates an enterprise-ready, production-grade app with authentication, real-time updates, SEO optimizations, and a rich UI powered by Tailwind CSS and ShadCN components.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Authentication](#authentication)
- [Routing and Layouts](#routing-and-layouts)
- [Data Fetching Strategies](#data-fetching-strategies)
- [Sanity CMS Integration](#sanity-cms-integration)
- [Styling and UI Components](#styling-and-ui-components)
- [Real-Time Updates](#real-time-updates)
- [SEO and Metadata](#seo-and-metadata)
- [Error Handling and Loading States](#error-handling-and-loading-states)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

YC Directory is a startup directory platform where users can submit, search, and explore startup pitches. It features:

- GitHub OAuth authentication
- Server and client components with React 19 and Next.js 15
- File-based routing with nested and dynamic routes
- Partial Pre-Rendering (PPR) for combining static and dynamic content
- Real-time content updates via Sanity's live API
- SEO optimized metadata management
- Robust error and loading UI handling
- Responsive design with Tailwind CSS and ShadCN UI components

This project is designed to showcase modern best practices and advanced Next.js capabilities for building scalable full-stack applications 【0.08, type: source】 【19357.32, type: source】 .

---

## Features

- **Authentication:** GitHub OAuth via NextAuth.js with server actions integration.
- **Routing:** File-based routing with nested, dynamic, and route groups.
- **Layouts:** Multiple layouts and route groups for shared UI and code organization.
- **Data Fetching:** Server-side fetching, ISR, SSR, and Partial Pre-Rendering (PPR).
- **API Routes:** Serverless API endpoints for backend logic.
- **Sanity CMS:** Content management with GROQ queries, schema validation, and real-time updates.
- **Styling:** Tailwind CSS with custom theming and ShadCN component library.
- **Search:** Server-rendered search form with URL query synchronization.
- **Error & Loading UI:** Custom error boundaries and loading states per route.
- **Performance:** Automatic code splitting, caching strategies, and optimized images.
- **Deployment:** Easy deployment with Vercel and environment variable management.
- **Monitoring:** Integrated Sentry for error tracking and performance monitoring.

---

## Tech Stack

- **Next.js 15** with React 19
- **Sanity CMS** for content management
- **NextAuth.js** for authentication
- **Tailwind CSS** for styling
- **ShadCN UI** component library
- **Zod** for schema validation
- **Sentry** for error monitoring
- **Vercel** for deployment

---

## Getting Started

### Prerequisites

- Node.js (latest LTS recommended)
- npm or yarn
- GitHub account for OAuth

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd yc-directory

   # YC Directory - Next.js Full-Stack Application

## Environment Setup

Create a `.env.local` file in the root of your project with the following environment variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_WRITE_TOKEN=your_sanity_write_token
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_SECRET=your_nextauth_secret -->


# YC Directory - Next.js Full-Stack Application

Welcome to the **YC Directory** project, a modern full-stack web application built with the latest Next.js features, React 19, and Sanity CMS. This project demonstrates an enterprise-ready, production-grade app with authentication, real-time updates, SEO optimizations, and a rich UI powered by Tailwind CSS and ShadCN components.

---

 <div>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=react&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Sanity-black?style=for-the-badge&logoColor=white&logo=sanity&color=F03E2F" alt="sanity" />

  </div>

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Authentication](#authentication)
- [Routing and Layouts](#routing-and-layouts)
- [Data Fetching Strategies](#data-fetching-strategies)
- [Sanity CMS Integration](#sanity-cms-integration)
- [Styling and UI Components](#styling-and-ui-components)
- [Real-Time Updates](#real-time-updates)
- [SEO and Metadata](#seo-and-metadata)
- [Error Handling and Loading States](#error-handling-and-loading-states)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

YC Directory is a startup directory platform where users can submit, search, and explore startup pitches. It features:

- GitHub OAuth authentication
- Server and client components with React 19 and Next.js 15
- File-based routing with nested and dynamic routes
- Partial Pre-Rendering (PPR) for combining static and dynamic content
- Real-time content updates via Sanity's live API
- SEO optimized metadata management
- Robust error and loading UI handling
- Responsive design with Tailwind CSS and ShadCN UI components

This project is designed to showcase modern best practices and advanced Next.js capabilities for building scalable full-stack applications.

---

## Features

- **Authentication:** GitHub OAuth via NextAuth.js with server actions integration.
- **Routing:** File-based routing with nested, dynamic, and route groups.
- **Layouts:** Multiple layouts and route groups for shared UI and code organization.
- **Data Fetching:** Server-side fetching, ISR, SSR, and Partial Pre-Rendering (PPR).
- **API Routes:** Serverless API endpoints for backend logic.
- **Sanity CMS:** Content management with GROQ queries, schema validation, and real-time updates.
- **Styling:** Tailwind CSS with custom theming and ShadCN component library.
- **Search:** Server-rendered search form with URL query synchronization.
- **Error & Loading UI:** Custom error boundaries and loading states per route.
- **Performance:** Automatic code splitting, caching strategies, and optimized images.
- **Deployment:** Easy deployment with Vercel and environment variable management.
- **Monitoring:** Integrated Sentry for error tracking and performance monitoring.

---

## Tech Stack

- **Next.js 15** with React 19
- **Sanity CMS** for content management
- **NextAuth.js** for authentication
- **Tailwind CSS** for styling
- **ShadCN UI** component library
- **Zod** for schema validation
- **Sentry** for error monitoring
- **Vercel** for deployment

---

## Getting Started

### Prerequisites

- Node.js (latest LTS recommended)
- npm or yarn
- GitHub account for OAuth

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd yc-directory
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env.local` file with the following keys:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_WRITE_TOKEN=your_sanity_write_token
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Project Structure

```
yc-directory/
├── app/
│   ├── (root)/
│   │   ├── startup/
│   │   │   └── [id]/
│   │   └── user/
│   │       └── [id]/
│   ├── api/
│   │   └── auth/
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   └── error.tsx
├── components/
│   ├── ui/
│   └── shared/
├── sanity/
│   ├── schemas/
│   └── lib/
├── public/
└── lib/
    ├── actions.ts
    └── utils.ts
```

---

## Authentication

- Uses **NextAuth.js** with GitHub OAuth provider.
- Server actions handle sign-in and sign-out flows.
- User sessions are managed in server components for seamless UI updates.
- Authenticated users can create startups; unauthenticated users are redirected.

---

## Routing and Layouts

- File-based routing with support for nested and dynamic routes.
- Route groups organize code without affecting URLs.
- Multiple layouts allow shared UI per route group (e.g., root layout, dashboard layout).
- Dynamic routes extract parameters for user profiles and startup details.

---

## Data Fetching Strategies

- Server-side data fetching inside React server components.
- Incremental Static Regeneration (ISR) with time-based and on-demand revalidation.
- Server-Side Rendering (SSR) for frequently updated data like views.
- Partial Pre-Rendering (PPR) to combine static and dynamic content on the same page.
- Parallel data fetching using `Promise.all` to optimize load times.

---

## Sanity CMS Integration

- Sanity Studio configured with schemas for authors, startups, and playlists.
- GROQ queries fetch structured data with references and filtering.
- TypeScript types auto-generated from Sanity schemas and queries.
- Live content API enables real-time updates without page reloads.
- Write client with token-based authentication for secure data mutations.

---

## Styling and UI Components

- Tailwind CSS configured with custom colors and fonts hosted locally.
- Utility CSS classes created for reusable styles.
- ShadCN UI library integrated for buttons, inputs, avatars, skeleton loaders, and toasts.
- Responsive design with mobile-friendly navigation and form layouts.

---

## Real-Time Updates

- Search form updates URL query parameters automatically.
- Sanity live API streams new startups and updates views counters dynamically.
- Suspense and skeleton loaders improve perceived performance during data fetching.

---

## SEO and Metadata

- Static and dynamic metadata configured via exported objects and `generateMetadata` async functions.
- File-based metadata for favicons and social sharing images.
- Improved SEO with server-side rendered content and metadata per route.

---

## Error Handling and Loading States

- Custom `error.tsx` files for route-specific error boundaries.
- `loading.tsx` files provide loading UI during data fetches.
- Error boundaries must be client components to catch UI errors.
- User-friendly error messages replace default red screen errors.

---

## Website Is under development

<!-- ## Deployment

- Deployed on **Vercel** with environment variables configured.
- TypeScript and ESLint build errors ignored for smooth deployment.
- CORS and OAuth redirect URLs configured for production.
- Sentry integrated for real-time error monitoring and user feedback.

--- -->

<!-- ## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

--- -->

**Built with ❤️ using Next.js 15, React 19, and Sanity CMS**