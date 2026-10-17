# Developer Portfolio (React)

A responsive developer portfolio built with React and Vite as part of the Week 05 Web Development task.

## Features

- Modular React components: Navbar, About, Skills, Projects, Contact, Footer
- Data-driven UI: skills and projects rendered from arrays using `map()`
- Props used to pass data from `App` to child components
- Dark / light mode toggle using React state
- Project filter by category
- Interactive skills section (click to highlight)
- Contact form with controlled inputs
- Fully responsive for desktop and mobile

## Tech Stack

- React
- Vite
- CSS (custom properties for theming)

## Project Structure

```text
src/
  components/
    About.jsx
    Contact.jsx
    Footer.jsx
    Navbar.jsx
    Projects.jsx
    Skills.jsx
  data/
    portfolioData.js
  App.jsx
  index.css
  main.jsx
```

## Run Locally

```bash
git clone https://github.com/Drishyarao/week-05-react-portfolio.git
cd week-05-react-portfolio
npm install
npm run dev
```

## Author

Drishya, third-year B.Tech Computer Science student (Cybersecurity) at NMAMIT.