function About({ paragraphs }) {
  return (
    <section id="about" className="section about-section">
      <div className="profile-card">
        <h2>About Me</h2>
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </section>
  );
}

export default About;