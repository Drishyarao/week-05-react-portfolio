function Footer({ links }) {
  return (
    <footer>
      <p>© 2026 Drishya. All rights reserved.</p>

      <div className="social-links">
        {links.map((link) => (
          <a key={link.id} href={link.url} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;