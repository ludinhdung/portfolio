import { motion } from "framer-motion";
import "./Project.css";
import projects from "./data";

function Project() {
  return (
    <section id="project-section">
      <div className="project">
        <motion.h1
          className="project-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h1>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>

      <motion.a
        className="github-check"
        href="https://github.com/ludinhdung"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Check my other projects on Github.
      </motion.a>
    </section>
  );
}

const ProjectItem = ({ project }) => (
  <section className="project-item">
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {project.name} <span className="arrow">&nbsp; →</span>
    </motion.a>

    <motion.p
      className="project-description"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
      {project.description}
    </motion.p>

    <div className="stacks-list">
      {project.stacks.map((stack, index) => (
        <div key={index} className="stack-item">
          {stack}
        </div>
      ))}
    </div>
  </section>
);

export default Project;
