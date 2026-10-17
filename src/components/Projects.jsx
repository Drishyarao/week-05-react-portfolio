import { useState } from "react";

function Projects({ projects }) {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "filter-btn active" : "filter-btn"}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-container">
        {visibleProjects.map((project) => (
          <article key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="project-tag">{project.category}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;