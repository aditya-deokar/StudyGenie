<div align="center">

# 🧠 StudyGenie (NeoPrep)

**AI-powered career preparation platform — generate courses, simulate interviews, and unlock real-time industry intelligence.**

**Live:** https://study-genie-theta.vercel.app/

![StudyGenie Banner](./public/banner.png)

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?logo=prisma)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Environment Variables](#-environment-variables)
- [Getting Started](#-getting-started)
- [Database Setup](#-database-setup)
- [Running the Application](#-running-the-application)
- [Available Scripts](#-available-scripts)
- [API Integrations](#-api-integrations)
- [Architecture Decisions](#-architecture-decisions)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**StudyGenie** (branded as **NeoPrep**) is a full-stack AI-powered career preparation platform built for tech professionals. It helps users navigate their careers by:

- Generating structured, personalized learning courses with AI
- Simulating realistic voice-powered technical interviews
- Delivering weekly AI-refreshed industry salary data, skill trends, and market outlooks
- Providing a collaborative community workspace with real-time messaging

The platform combines Google's Gemini AI, voice-powered interview agents via Vapi, scheduled background jobs via Inngest, and a Socket.IO real-time layer — all orchestrated within a Next.js 15 App Router application.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎓 **AI Course Generator** | Input a topic, category, level, and duration — Gemini 2.0 Flash generates a complete course with chapters, descriptions, and embedded YouTube videos |
| 🎤 **AI Interview Simulator** | Voice-based mock interviews powered by Vapi AI and Gemini; receive real-time feedback and scores |
| 📊 **Industry Intelligence** | Weekly auto-refreshed salary ranges, demand levels, market outlooks, key trends, and recommended skills per industry |
| 🏆 **Achievements & Gamification** | Earn badges and track milestones as you complete courses and assessments |
| 📅 **Activity Heatmap** | GitHub-style contribution heatmap showing your daily learning activity |
| 💬 **Community Messaging** | Real-time room-based chat powered by Socket.IO |
| 📈 **Skill Progress Tracking** | Visualize skill growth over time with interactive Recharts dashboards |
| 🗓️ **Learning Calendar** | Schedule and manage your study sessions |
| 📜 **Certificate Generation** | Receive AI-generated certificates on course completion |
| 🌗 **Dark / Light Mode** | Full theme support via `next-themes` |
| 🔐 **Authentication** | Secure sign-in / sign-up via Clerk with protected routes |

---

## 🛠 Tech Stack

### Core Framework
| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15.2.3 | Full-stack React framework (App Router) |
| [React](https://react.dev/) | 19 | UI rendering |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |

### AI & Automation
| Technology | Purpose |
|---|---|
| [Google Gemini 2.0 Flash](https://ai.google.dev/) | Course generation, chapter content, industry insights |
| [Vapi AI](https://vapi.ai/) | Voice-powered interview simulation |
| [Inngest](https://www.inngest.com/) | Scheduled background jobs (weekly industry insight refresh) |
| [Vercel AI SDK](https://sdk.vercel.ai/) | Streaming AI responses |

### Database & ORM
| Technology | Purpose |
|---|---|
| [PostgreSQL](https://www.postgresql.org/) | Relational database |
| [Prisma](https://www.prisma.io/) | Type-safe ORM + migrations |
| [Prisma Accelerate](https://www.prisma.io/data-platform/accelerate) | Connection pooling & caching |

### Authentication
| Technology | Purpose |
|---|---|
| [Clerk](https://clerk.com/) | Authentication, user management, protected routes |

### Real-time & Integrations
| Technology | Purpose |
|---|---|
| [Socket.IO](https://socket.io/) | Real-time community messaging |
| [Firebase](https://firebase.google.com/) | File storage (course banners, assets) |
| [YouTube Data API v3](https://developers.google.com/youtube/v3) | Embedded chapter videos |

### UI & Styling
| Technology | Purpose |
|---|---|
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Radix UI](https://www.radix-ui.com/) | Accessible headless components |
| [shadcn/ui](https://ui.shadcn.com/) | Pre-built component library |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [Recharts](https://recharts.org/) | Data visualization |
| [Lucide React](https://lucide.dev/) / [Tabler Icons](https://tabler.io/icons) | Icon sets |

### Forms & Validation
| Technology | Purpose |
|---|---|
| [React Hook Form](https://react-hook-form.com/) | Form state management |
| [Zod](https://zod.dev/) | Schema validation |

### State Management
| Technology | Purpose |
|---|---|
| [Zustand](https://zustand-demo.pmnd.rs/) | Global client state |

---

## 📁 Project Structure

```
StudyGenie/
├── app/                        # Next.js App Router
│   ├── (auth)/                 # Authentication pages (sign-in, sign-up)
│   ├── api/                    # API route handlers
│   ├── course/                 # Course viewer pages
│   ├── dashboard/              # Main application dashboard
│   │   ├── achievements/       # Badges & milestones
│   │   ├── activity/           # Activity log
│   │   ├── calendar/           # Study calendar
│   │   ├── community/          # Real-time chat rooms
│   │   ├── courses/            # Course list & generator
│   │   ├── industry/           # Industry intelligence
│   │   ├── interviews/         # AI interview simulator
│   │   ├── messages/           # Messaging inbox
│   │   ├── onboarding/         # New user onboarding
│   │   ├── settings/           # User settings
│   │   └── skills/             # Skill tracker
│   ├── industry/               # Public industry pages
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Landing page
├── actions/                    # Next.js Server Actions
│   ├── assessment.ts           # Quiz & assessment logic
│   ├── course.ts               # Course CRUD operations
│   ├── createChapters.ts       # AI chapter generation
│   ├── createCourse.ts         # AI course creation
│   ├── dashboard.ts            # Dashboard data fetching
│   ├── industry.ts             # Industry insights queries
│   └── user.ts                 # User management
├── components/                 # Reusable React components
│   ├── course/                 # Course-specific components
│   ├── dashboard/              # Dashboard widgets
│   ├── industry-sections/      # Industry charts & tables
│   ├── landing-page/           # Marketing page components
│   ├── providers/              # Context providers
│   └── ui/                     # shadcn/ui base components
├── configs/
│   ├── AIModel.tsx             # Gemini AI model configuration
│   └── service.tsx             # YouTube API service
├── hooks/                      # Custom React hooks
├── interview/                  # Vapi interview utilities & constants
├── lib/
│   ├── inngest/                # Background job definitions (cron)
│   ├── services/               # Business logic services
│   ├── certificate-generator.ts
│   ├── prisma.ts               # Prisma client singleton
│   ├── schema.ts               # Zod validation schemas
│   ├── store.ts                # Zustand global store
│   └── utils.ts                # Shared utilities
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── migrations/             # Database migrations
├── public/                     # Static assets
├── types/                      # Shared TypeScript type definitions
├── middleware.ts               # Clerk auth middleware
├── server.js                   # Socket.IO standalone server (port 3001)
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── package.json
```

---

## ✅ Prerequisites

Ensure the following are installed on your machine before starting:

- **Node.js** ≥ 18.x ([Download](https://nodejs.org/))
- **npm** ≥ 9.x (bundled with Node.js)
- **PostgreSQL** ≥ 14 ([Download](https://www.postgresql.org/download/)) — or use a hosted provider such as [Neon](https://neon.tech/), [Supabase](https://supabase.com/), or [Railway](https://railway.app/)

---

## 🔑 Environment Variables

Create a `.env.local` file in the project root. The table below lists every variable the application needs:

```env
# ─── Database ────────────────────────────────────────────────────────────────
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"

# ─── Clerk (Authentication) ──────────────────────────────────────────────────
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# ─── Google Gemini AI ────────────────────────────────────────────────────────
NEXT_PUBLIC_GEMINI_API_KEY=AIza...   # Used for course generation (client-safe)
GEMINI_API_KEY=AIza...               # Used for server-side Inngest jobs

# ─── YouTube Data API ────────────────────────────────────────────────────────
NEXT_PUBLIC_YOUTUBE_API_KEY=AIza...

# ─── Vapi AI (Voice Interview) ───────────────────────────────────────────────
NEXT_PUBLIC_VAPI_WEB_TOKEN=...
NEXT_PUBLIC_VAPI_WORKFLOW_ID=...

# ─── Firebase ────────────────────────────────────────────────────────────────
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...

# ─── Inngest (Background Jobs) ───────────────────────────────────────────────
INNGEST_EVENT_KEY=...
INNGEST_SIGNING_KEY=...
```

> **Security note:** Never commit `.env.local` to version control. It is already listed in `.gitignore`.

### Where to get each key

| Service | Docs / Console |
|---|---|
| PostgreSQL | [Neon Console](https://console.neon.tech/) · [Supabase Dashboard](https://supabase.com/dashboard) |
| Clerk | [Clerk Dashboard](https://dashboard.clerk.com/) → API Keys |
| Google Gemini | [Google AI Studio](https://aistudio.google.com/) → Get API Key |
| YouTube Data API | [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services |
| Vapi | [Vapi Dashboard](https://dashboard.vapi.ai/) |
| Firebase | [Firebase Console](https://console.firebase.google.com/) → Project Settings |
| Inngest | [Inngest Cloud](https://app.inngest.com/) → Event Keys |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/aditya-deokar/StudyGenie.git
cd StudyGenie
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env.local   # or create .env.local manually
# Fill in all required values — see the Environment Variables section
```

---

## 🗄 Database Setup

### Generate Prisma client

```bash
npx prisma generate
```

### Run migrations

Apply all existing migrations to your database:

```bash
npx prisma migrate deploy
```

Or, during development, use:

```bash
npx prisma migrate dev
```

### Seed / inspect your data (optional)

```bash
npx prisma studio   # Opens a GUI at http://localhost:5555
```

---

## ▶ Running the Application

The application has **two concurrent processes**:

| Process | Port | Description |
|---|---|---|
| Next.js (App) | `3000` | Main web application |
| Socket.IO Server | `3001` | Real-time community messaging |

### Development

Start both processes simultaneously with:

```bash
npm run dev
```

This uses `concurrently` to run `next dev --turbopack` and `node server.js` in parallel.

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build   # Generates Prisma client + builds Next.js
npm run start   # Starts the production Next.js server
```

> **Note:** In production, the Socket.IO server (`server.js`) must be started separately or managed via a process manager such as [PM2](https://pm2.keymetrics.io/).

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Start Next.js (Turbopack) + Socket.IO concurrently |
| Build | `npm run build` | Generate Prisma client and build for production |
| Start | `npm run start` | Start the production Next.js server |
| Lint | `npm run lint` | Run ESLint across the codebase |
| Prisma Studio | `npx prisma studio` | Visual database browser |
| DB Migrate Dev | `npx prisma migrate dev` | Apply migrations and regenerate client (dev) |
| DB Migrate Deploy | `npx prisma migrate deploy` | Apply migrations (production) |

---

## 🔌 API Integrations

### Google Gemini AI
Used in two ways:
- **Course generation** (`configs/AIModel.tsx`) — generates `CourseName`, `Description`, and per-chapter details (title, about, duration) as JSON.
- **Chapter content** — generates detailed reading material with code examples.
- **Industry insights** (`lib/inngest/function.ts`) — generates salary ranges, growth rates, demand levels, key trends, and recommended skills per industry.

### YouTube Data API
`configs/service.tsx` queries the YouTube v3 Search API to fetch relevant video IDs for each course chapter, which are then rendered with `react-youtube`.

### Vapi AI
`components/Agent.tsx` connects to Vapi's web SDK to conduct voice-based mock interviews. After the session ends, the transcript and score are stored in the database and displayed on the `ScoreCard` component.

### Firebase
Used for storing course banner images and other static file uploads. Firebase Admin SDK is used server-side for secure operations.

### Inngest
`lib/inngest/function.ts` defines a cron job that runs every Sunday at midnight (`0 0 * * 0`). It loops through all industries stored in the database and calls Gemini to refresh their insights.

### Socket.IO
`server.js` runs a standalone Node.js HTTP server on port 3001. Clients join named rooms and exchange `chatMessage` events for real-time community messaging.

---

## 🏗 Architecture Decisions

- **Next.js App Router** — Layouts, Server Components, and Server Actions are used throughout to minimise client-side JavaScript and simplify data fetching patterns.
- **Prisma Accelerate** — Connection pooling is handled at the Prisma level, allowing the serverless Next.js edge functions to reuse database connections efficiently.
- **Clerk Middleware** — `middleware.ts` protects `/dashboard`, `/onboarding`, `/course`, and `/industry` routes, redirecting unauthenticated users to `/sign-in`.
- **Zustand** — A single global store (`lib/store.ts`) manages shared UI state (sidebar open/close, current view) without the boilerplate of Redux.
- **Inngest for background AI** — Long-running Gemini calls for industry insights are offloaded to Inngest cron functions to avoid Next.js API route timeouts.
- **Concurrent dev server** — `concurrently` starts both the Next.js app and the standalone Socket.IO server with a single `npm run dev` command.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** this repository.
2. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** and ensure they follow the existing code style.
4. **Lint your code**:
   ```bash
   npm run lint
   ```
5. **Commit** with a clear, descriptive message:
   ```bash
   git commit -m "feat: add brief description of your change"
   ```
6. **Push** to your fork and **open a Pull Request** against `main`.

### Code Style

- TypeScript strict mode is enabled — avoid `any` where possible.
- Component files use `.tsx`, utility/service files use `.ts`.
- Follow the existing folder structure — pages in `app/`, reusable UI in `components/`, server logic in `actions/` or `lib/`.
- Use Zod schemas (defined in `lib/schema.ts`) for all form and API validation.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

Built with ❤️ by [Aditya Deokar](https://github.com/aditya-deokar)

</div>
