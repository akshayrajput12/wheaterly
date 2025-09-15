# Weatherly Marketing Website

A beautiful, responsive marketing website for the Weatherly cross-platform mobile weather app, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🌦️ **Beautiful Animations**: Smooth transitions and micro-interactions powered by Framer Motion
- 📱 **Device Mockups**: Interactive phone mockup showcasing the app
- 🔍 **Live Demo Search**: Try the weather search functionality directly on the website
- 🎨 **Modern Design**: Glassmorphism UI with gradient backgrounds
- 🌐 **Responsive Layout**: Works on all device sizes
- ♿ **Accessible**: Proper ARIA labels and reduced motion support

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library for React
- [React](https://reactjs.org/) - JavaScript library for building user interfaces

## Project Structure

```
/weatherly-site
├─ /public
├─ /src
│  ├─ /components
│  │   ├─ Hero.tsx
│  │   ├─ FeatureCard.tsx
│  │   ├─ DemoSearch.tsx
│  │   ├─ HowItWorks.tsx
│  │   ├─ Testimonials.tsx
│  │   ├─ FAQ.tsx
│  │   └─ Footer.tsx
│  ├─ /lib
│  │   └─ openweather.ts
│  ├─ /hooks
│  │   └─ useDebounce.ts
│  ├─ /utils
│  │   └─ format.ts
│  ├─ /app
│  │   ├─ layout.tsx
│  │   └─ page.tsx
├─ tailwind.config.js
├─ tsconfig.json
└─ package.json
```

## Documentation

- [Development Challenges and Solutions](DEVELOPMENT_CHALLENGES.md) - Detailed overview of technical challenges encountered and their solutions
- [Project Report](PROJECT_REPORT.md) - Comprehensive documentation of the project including features, architecture, and design decisions

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS utilities
- [Framer Motion Documentation](https://www.framer.com/docs/) - learn about Framer Motion animations

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.