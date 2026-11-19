# Portfolio: IT Intern / Aspiring Web Developer

Personal portfolio website built with **React + Vite + Tailwind CSS**.

## Features
- Sections: Hero, About, Skills, Projects, Certifications, Education, Contact
- Light/dark mode (saved in localStorage, follows system by default)
- Fully responsive, fade-in on scroll, SEO meta tags
- Contact form via Formspree (falls back to `mailto:`)
- All content lives in one file: `src/data/portfolio.js`

## Getting Started
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Customizing
1. Edit `src/data/portfolio.js` with your info.
2. Add your photo to `public/images/` and update `profile.photo`.
3. Add project screenshots to `public/images/` and update each project's `image`.
4. Put your resume at `public/resume.pdf`.
5. (Optional) Create a free form at https://formspree.io and paste the ID into `formspreeId`.

## Deploy (Vercel)
1. Push this repo to GitHub.
2. Go to https://vercel.com → **Add New Project** → import the repo.
3. Framework preset: **Vite** (auto-detected) → **Deploy**.
Every push to `main` auto-deploys.
