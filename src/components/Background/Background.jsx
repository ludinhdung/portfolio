import { motion } from "framer-motion";
import "./Background.css";

function Background() {
  return (
    <section id="background" className="background">
      <motion.h1
        className="background-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
      >
        My background
      </motion.h1>

      <motion.div
        className="background-story"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p>
          I recently graduated from <b>FPT University</b> after completing
          Bachelor of Engineering in Software Engineering.
          <br />
          <br />
          My goal is to always build applications that are scalable and
          efficient under the hood while providing engaging, pixel-perfect user
          experiences.
          <br />
          <br />
          When I'm not in front of a computer screen. I'm probably watching
          stuffs, doing exercises or playing video games.
        </p>
      </motion.div>
    </section>
  );
}

export default Background;
