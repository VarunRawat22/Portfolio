# Web Developer Portfolio

A minimal, internship-ready single-page portfolio built with React (Vite), JavaScript, and plain CSS.

## Folder structure

```
port/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Section.jsx
│   │   └── Section.css
│   ├── data/
│   │   └── projects.js  # Edit projects here
│   ├── pages/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   │   (+ corresponding .css files)
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Run the project

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (e.g. `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## Customization

- **Name, role, links:** Update `src/pages/Hero.jsx`, `src/pages/Contact.jsx`, `src/components/Footer.jsx`, and `index.html` (title, meta author).
- **Projects:** Edit `src/data/projects.js` (title, description, tech, GitHub, live URLs).
- **Skills:** Edit the `skillGroups` array in `src/pages/Skills.jsx`.
- **About text:** Edit `src/pages/About.jsx`.

## Tech stack

- React 18
- Vite 5
- Plain CSS (no Tailwind)
- No React Router (single-page with section anchors)

## Troubleshooting: `spawn EPERM` / `Cannot find module vite`

If the project lives **inside OneDrive** (e.g. `OneDrive\Desktop\...`), Windows/OneDrive can block Vite’s use of the `esbuild` binary and you may see:

- `Error: spawn EPERM`
- `Cannot find module ...\node_modules\vite\bin\vite.js` (after a failed install)

**Fix:**

1. **Move the project out of OneDrive** (recommended)  
   Copy or move the whole `port` folder to a path that is **not** synced by OneDrive, for example:
   - `C:\dev\port`
   - `C:\PROJECTS\port`  
   Then in the new folder run:
   ```bash
   npm install
   npm run dev
   ```

2. **If you must keep it in OneDrive:**  
   - Close all terminals/IDE tabs using this project.  
   - Delete the `node_modules` folder and `package-lock.json`.  
   - Right‑click the project folder → **Always keep on this device** (so OneDrive doesn’t stream files).  
   - Run `npm install` again, then `npm run dev`.  
   If it still fails, use option 1.
