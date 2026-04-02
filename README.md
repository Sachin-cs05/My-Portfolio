# Portfolio Website

A modern portfolio website built with Next.js 16, React 19, and Tailwind CSS v4. This repository is structured for personal branding, project showcase, and smooth visitor interaction.

## 🚀 Features

- Responsive UI (mobile / tablet / desktop)
- Dark mode support via `next-themes`
- Components for hero, about, skills, projects, achievements, contact, and footer
- Built with Radix UI primitives and animation via `framer-motion`
- Form handling using `react-hook-form` and validation via `zod`
- Client-side interactivity and fast navigation

## 🧱 Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Radix UI components
- Framer Motion
- Recharts
- Next Themes
- Sonner notifications

## 📁 Repository structure

- `app/` — Next.js app routes, global CSS, layout
- `components/` — UI sections and shared components
- `components/ui/` — custom UI primitives and wrappers
- `hooks/` — custom hooks (`use-mobile`, `use-toast`)
- `lib/` — utilities
- `public/` — static assets
- `styles/` — global styling

## ⚙️ Quick start

1. Install dependencies:

```bash
npm install
```

2. Run local development server:

```bash
npm run dev
```

3. Open:

- `http://localhost:3000`

4. Build for production:

```bash
npm run build
```

5. Start production server:

```bash
npm run start
```

6. Lint code:

```bash
npm run lint
```

## 🌐 Deployment

Supports standard Next.js deployment targets:
- Vercel
- Netlify
- Azure Static Web Apps

For Vercel, simply connect the repo and deploy (auto-detects Next.js).

## 🛠️ Recommended customizations

- Update `app/page.tsx` and individual component content with your personal details
- Replace `public` assets with your own images and icons
- Adjust theme and layout in `app/globals.css`

## 📌 Notes

- This app ships with TypeScript and modern lint defaults.
- If you run into a missing package, clean install with:

```bash
npm ci
```

## ✉️ Contact

Add your social links and contact details in components/contact-section.tsx and at the top of this README.

---

*Generated for a portfolio project from D:\Sachin Drive\Projects\Portfolio*