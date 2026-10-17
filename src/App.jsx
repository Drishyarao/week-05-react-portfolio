import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  aboutParagraphs,
  skills,
  projects,
  socialLinks,
} from "./data/portfolioData";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "app dark" : "app"}>
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      <main>
        <About paragraphs={aboutParagraphs} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact />
      </main>

      <Footer links={socialLinks} />
    </div>
  );
}

export default App;