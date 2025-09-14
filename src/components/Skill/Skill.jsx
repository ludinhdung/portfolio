import { motion } from "framer-motion";
import "./Skill.css";
import skills from "./skills";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Skill() {
  return (
    <motion.section
      id="skills"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1
        className="skills-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Toolbox & Things I Can Do
      </motion.h1>

      <motion.div className="skills-list" variants={containerVariants}>
        {skills.map((s, index) => (
          <SkillItem key={index} s={s} />
        ))}
      </motion.div>
    </motion.section>
  );
}

const SkillItem = ({ s }) => {
  return (
    <motion.div className="skills-item" variants={itemVariants}>
      <img src={s.imageUrl} alt={s.name} className="skills-img" />
      <p className="skills-name">{s.name}</p>
    </motion.div>
  );
};

export default Skill;
