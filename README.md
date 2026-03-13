# Asad Portfolio

A modern developer portfolio built with React and Vite, featuring glassmorphism cards, responsive layout, animated sections, and a 3D avatar embed.

## Quick Start

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

Default local URL: http://localhost:5173

## Current Tech Stack

- React 18.3.1
- Vite 5.3.4
- React Router DOM 6.25.1
- Framer Motion 12.35.2
- MUI (material + icons) 5.16.4
- TailwindCSS 3.4.17 (present in dependencies)
- Formspree form action for contact form

3D-related packages installed:

- @splinetool/react-spline
- @splinetool/runtime
- @react-three/fiber
- @react-three/drei
- three

Current avatar rendering in the app uses an iframe Spline embed in About section.

## App Routes

Defined in [src/App.jsx](src/App.jsx):

- / (home composition)
- /projects
- /platforms
- /achievements
- /experience
- /education
- /contact

## Home Page Composition

The / route renders these sections in order:

1. About
2. Experience
3. Education
4. Projects
5. Achievement
6. Skills and Expertise
7. Platforms

## Project Structure

```text
src/
  components/
    Header/
    Footer/
  Pages/
    AboutMe/
    Experience/
    Education/
    Projects/
    Achievements/
    SkillsAndExp/
    Platforms/
    Contact/
    MySkills/
    MyCodingPlatform/
  images/
  App.jsx
  index.css
  main.jsx
```

## Skills Categories (Current)

Defined in [src/Pages/SkillsAndExp/SkillsAndExp.jsx](src/Pages/SkillsAndExp/SkillsAndExp.jsx):

- Languages: Java, Python, C
- Frontend: HTML, CSS, JavaScript, TypeScript, ReactJS, Next.js, Tailwind CSS
- Backend: NodeJS, ExpressJS, Django, MongoDB, SQLite
- Tools: Git/Github, Git Fork, Postman, VS Code

## Projects Data Shape

Projects in [src/Pages/Projects/Projects.jsx](src/Pages/Projects/Projects.jsx) use:

```jsx
{
  id: 1,
  img: ProjectImage,
  topic: "Project Name",
  techStack: ["React", "Node.js"],
  achievement: "One-line impact statement",
  link: "https://project-link",
  delay: 0.1
}
```

## Theme Notes

- Dark and light themes are controlled via CSS variables in [src/index.css](src/index.css).
- Light theme card visibility is tuned with darker border and shadow values.

## Contact and Footer

- Contact form action is configured in [src/Pages/Contact/Contact.jsx](src/Pages/Contact/Contact.jsx).
- Footer navigation includes Experience and Education routes.

## Deployment

Build output is generated in dist/.

Typical deployment flow:

```bash
npm run build
```

Then deploy dist/ to Netlify, Vercel, or any static host.

## Documentation Files

Additional docs in repo root:

- [BENTO_GRID_GUIDE.md](BENTO_GRID_GUIDE.md)
- [TRANSFORMATION_SUMMARY.md](TRANSFORMATION_SUMMARY.md)
- [VISUAL_PREVIEW.md](VISUAL_PREVIEW.md)
- [CHECKLIST.md](CHECKLIST.md)

## Author

Mohd Asad Ansari

# My-Portfolio
