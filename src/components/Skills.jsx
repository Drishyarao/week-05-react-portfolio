import { useState } from "react";

function Skills({ skills }) {
  const [selected, setSelected] = useState(null);

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div
            key={skill}
            className="skill"
            onClick={() => setSelected(skill === selected ? null : skill)}
            style={
              selected === skill
                ? { background: "var(--primary-dark)", transform: "scale(1.1)" }
                : {}
            }
          >
            {skill}
          </div>
        ))}
      </div>

      {selected && (
        <p style={{ textAlign: "center", marginTop: "25px" }}>
          You selected: <strong>{selected}</strong>
        </p>
      )}
    </section>
  );
}

export default Skills;