# Neha Poulose K — Portfolio

Personal portfolio for Neha Poulose K, Information Technology graduate. Built with React, Vite, Framer Motion, and Lucide.

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

## Add your profile photo

1. Save a square or portrait photo as `public/profile.jpg`.
2. In `src/data/content.js`, change:

```js
export const PROFILE_IMAGE = "/profile.jpg";
```

The hero already uses this constant, so no other component needs to change. `public/profile.svg` is the placeholder until you replace it.

## Resume PDF

The downloadable resume is the uploaded file, saved as:

`public/resume/Neha_Poulose_K_Resume.pdf`

The download button reads one setting in `src/data/content.js`:

```js
export const RESUME_URL = "/resume/Neha_Poulose_K_Resume.pdf";
```

After the site is deployed, that file is available at:

`https://YOUR-DOMAIN/resume/Neha_Poulose_K_Resume.pdf`

To point the button at a different public PDF later, replace only `RESUME_URL`.

## Project repository links

GitHub buttons currently use a placeholder in `src/data/content.js`:

```js
export const PROJECT_REPO_PLACEHOLDER = "https://github.com/nehapoulose77";
```

Replace each project’s `repo` value with the real repository URL when you have it.

## GitHub repository

From this folder:

```bash
git init
git add .
git commit -m "Add personal portfolio site"
gh repo create neha-poulose-portfolio --public --source=. --remote=origin --push
```

If the GitHub CLI is not installed, create an empty public repository on GitHub, then:

```bash
git remote add origin https://github.com/nehapoulose77/neha-poulose-portfolio.git
git branch -M main
git push -u origin main
```

The resume PDF in `public/resume/` is part of the repository, so it is hosted with the source.

## Deploy on Vercel

1. Sign in at [vercel.com](https://vercel.com) with the GitHub account that owns the repository.
2. Choose **Add New… → Project** and import `neha-poulose-portfolio`.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. Vercel will publish a live URL such as `https://neha-poulose-portfolio.vercel.app`.

Or with the Vercel CLI:

```bash
npx vercel login
npx vercel --prod
```

No environment variables are required.

## Folder structure

```text
public/
  profile.svg
  favicon.svg
  resume/Neha_Poulose_K_Resume.pdf
src/
  components/
  data/content.js
  App.jsx
  main.jsx
  index.css
```
