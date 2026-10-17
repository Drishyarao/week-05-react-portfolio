import { navLinks } from "../data/portfolioData";

function Navbar({ isDark, onToggleTheme }) {
  return (
    <header>
      <nav className="navbar">
        <h1 className="logo">Drishya</h1>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
          <li>
            <button className="theme-toggle" onClick={onToggleTheme}>
              {isDark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;