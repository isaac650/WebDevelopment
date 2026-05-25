# Celine Isaacs — Personal Homepage

**Author:** Celine Isaacs
**Class:** [CS Web Development — Northeastern University](https://northeastern.instructure.com)
**Live Demo:** https://isaac650.github.io/WebDevelopment/CelineHomePage/

## Project Objective

A personal homepage built with vanilla HTML5, CSS3, and ES6 modules. The site introduces who I am both academically and personally, showcasing my projects, skills, and work experience. The goal was to create a clean, professional page that reflects my background as a Creative Technologist and Computer Science student — without using any component libraries or jQuery.

## Screenshot

![Celine Isaacs Homepage](images/screenshot.png)

## Pages

- `index.html` — Home page with hero section, typing animation, skills and featured projects
- `about.html` — About me with education, work history, and skills
- `projects.html` — Full project listing
- `ai-generated.html` — AI generated page exploring AI in web development

## Features

- Dark/light mode toggle that persists across all pages using localStorage
- Typing animation on the home page cycling through role descriptions
- Responsive layout using CSS Grid and Flexbox
- ES6 modules with `type="module"`
- Black, white, and blue colour theme

## Creative Addition

Dark/light mode toggle — implemented in vanilla JavaScript. The user's preference is saved to `localStorage` and applied on every page load, with a smooth CSS transition between themes.

## Instructions to Build

No build step required. Run a local server:

```bash
cd CelineHomePage
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## File Structure

```
CelineHomePage/
├── index.html
├── about.html
├── projects.html
├── ai-generated.html
├── css/
│   └── main.css
├── js/
│   └── main.js
├── images/
│   ├── profile.jpg
│   └── favicon.svg
├── package.json
├── LICENSE
└── README.md
```

## Technologies Used

- HTML5
- CSS3
- ES6+ JavaScript
- Bootstrap 5
- Google Fonts (DM Serif Display, DM Sans)
- ESLint
- Prettier

## GenAI Usage

Claude was used to assist with , dark/light mode implementation, and debugging.
## License

MIT License — see LICENSE file for details.
