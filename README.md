# Chandrasekhar Samal — Portfolio (Premium Edition)

A premium, fully animated personal portfolio built with React (Vite), Tailwind CSS,
Framer Motion, GSAP, Lenis smooth scroll and EmailJS.

## Tech Stack

- **React 19 + Vite** — fast dev server and build
- **Tailwind CSS** — utility-first styling, dark/light mode via `class` strategy
- **Framer Motion** — page entrance, scroll-reveal and hover animations throughout
- **Lenis** — smooth, eased page scrolling (`src/hooks/useLenis.js`)
- **EmailJS** — working contact form (see setup below)
- **React Icons** — GitHub, LinkedIn, tech-stack icons
- **react-router-dom** — installed and ready if you split this into multiple pages later (the current build is a single scrolling page)
- **Canvas particle background** — a lightweight custom particle field (`ParticleBackground.jsx`) is used in the Hero instead of Three.js/React Three Fiber, to keep the bundle small and performance fast on all devices. Swap it for an R3F scene later if you want a heavier 3D effect.

## Getting Started

```bash
npm install
npm run dev        # start local dev server (http://localhost:5173)
npm run build       # production build → dist/
npm run preview     # preview the production build locally
```

## Setting Up the Contact Form (EmailJS)

The form works out of the box as a "mailto" fallback (it opens the visitor's email
app pre-filled). To make it send emails directly from your site:

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Add an **Email Service** (e.g. Gmail) → copy the **Service ID**.
3. Create an **Email Template** with these variables: `{{from_name}}`, `{{from_email}}`,
   `{{subject}}`, `{{message}}` → copy the **Template ID**.
4. Go to **Account → General** → copy your **Public Key**.
5. Open `src/components/Contact.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```
   with your real IDs/key. The form will automatically switch from the mailto
   fallback to sending through EmailJS once these are filled in.

## Project Structure

```
src/
  assets/         → profile photo
  components/     → Navbar, Hero, About, Skills, Projects, ProjectCard, Experience,
                     Education, Achievements, Contact, Footer, Loader,
                     ScrollProgress, BackToTop, CursorGlow, ParticleBackground
  data/           → skills.js, projects.js, experience.js (edit these to update content)
  hooks/          → useTheme.js (dark mode), useScrollSpy.js (active nav + scroll
                     progress), useLenis.js (smooth scroll), scrollUtils.js (anchor
                     scrolling helpers used by Navbar / Hero / BackToTop)
  pages/          → Home.jsx (assembles all sections)
  App.jsx
  main.jsx
  index.css
public/
  Chandrasekhar_Samal_Resume.pdf   → served by the navbar/hero "Download Resume" buttons
```

## Editing Content

- **Skills / progress bars** → `src/data/skills.js`
- **Projects** → `src/data/projects.js`. Each project has a `demo` field with a
  **placeholder live-demo URL** (`https://replace-with-live-link.com/...`) — once you
  deploy that individual project, swap in the real link and the "View Live" button
  on that card will point to it.
- **Experience timeline** → `src/data/experience.js`
- **Education** → `src/components/Education.jsx` (`EDUCATION` array at the top)
- **Profile photo** → replace `src/assets/profile.png`
- **Resume** → replace `public/Chandrasekhar_Samal_Resume.pdf` (keep the same filename,
  or update the `href` in `Navbar.jsx` and `Hero.jsx`)
- **Color theme** → `tailwind.config.js` (`primary`, `secondary`, `accent`, `surface`)

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo.
3. Vercel auto-detects Vite — leave the defaults:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**. You'll get a live `.vercel.app` URL in about a minute.
5. (Optional) Add a custom domain under **Project Settings → Domains**.

### Deploying to Netlify (alternative)

```bash
npm run build
```
Then drag-and-drop the generated `dist/` folder into Netlify's dashboard, or connect
your GitHub repo and set:
- Build Command: `npm run build`
- Publish Directory: `dist`
