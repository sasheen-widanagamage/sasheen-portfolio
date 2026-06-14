# Sasheen Widanagamage - Data Science Portfolio

A premium, recruiter-focused portfolio website for **Sasheen Widanagamage**, a BSc (Hons) Information Technology undergraduate specialising in Data Science.

The portfolio targets internship opportunities in:

- Data Analytics
- Business Intelligence
- Data Science
- Machine Learning
- AI
- Big Data Analytics

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Main Features

- Fully responsive modern UI
- Dark mode with saved preference
- Smooth scrolling and scroll progress indicator
- Loading animation
- Scroll animations
- Glassmorphism cards
- Interactive project filtering
- Animated statistics section
- GitHub contribution-style section
- Resume view/download button
- Contact form using `mailto:`
- SEO and Open Graph metadata
- Accessibility-friendly labels and focus states

## Project Structure

```text
portfolio/
├── public/
│   ├── favicon.ico
│   ├── og-image.svg
│   └── resume.pdf
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── sections/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Before Publishing

Replace these placeholder files/details:

1. `public/resume.pdf` - replace with Sasheen's final CV.
2. Project images in `src/assets/` - replace SVG placeholders with real project screenshots when available.
3. Live demo URLs in `src/data/portfolio.js` - currently set to `null` where no deployed link was visible.

## Run Locally

```bash
cd portfolio
npm install
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

## Build for Production

```bash
npm run build
```

The production build will be generated inside the `dist/` folder.

## Deploy Using GitHub and GitHub Pages

1. Create a new GitHub repository, for example:

```text
sasheen-portfolio
```

2. Open Command Prompt in the project folder.

3. Run these commands:

```bash
git init
git branch -M main
git add .
git commit -m "Initial portfolio website"
git remote add origin https://github.com/sasheen-widanagamage/sasheen-portfolio.git
git push -u origin main
```

4. Install the GitHub Pages deployment package:

```bash
npm install gh-pages --save-dev
```

5. Add these lines to `package.json`:

```json
"homepage": "https://sasheen-widanagamage.github.io/sasheen-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Keep the existing scripts and add only the missing ones.

6. Update `vite.config.js` for GitHub Pages:

```js
export default defineConfig({
  base: '/sasheen-portfolio/',
  plugins: [react()]
});
```

7. Deploy:

```bash
npm run deploy
```

8. On GitHub, go to:

```text
Settings > Pages
```

Select the `gh-pages` branch if it is not automatically selected.

## SEO Details

SEO metadata is configured in `index.html`:

- Page title
- Meta description
- Meta keywords
- Author metadata
- Open Graph title, description and image
- Twitter card metadata
- Theme color
- Favicon

## Performance Details

The project uses:

- Vite production build
- Lazy-loaded project images
- SVG assets for lightweight placeholders
- CSS-based visual effects
- Reduced-motion support for accessibility
- Manual chunking for React, Framer Motion and icons
- Clean component structure for maintainability

## Contact

Email: sasheenwidanagamage@gmail.com  
GitHub: <https://github.com/sasheen-widanagamage>  
LinkedIn: <https://lk.linkedin.com/in/sasheen-widanagamage-6809a3341>
