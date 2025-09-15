import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero__content"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="hero__title">
          Click. Clack. Full <br />
          <span className="stack-text name">Stackkkkkk</span>
        </h1>
      </motion.div>

      <motion.div
        className="hero__content"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="hero__description">
          Hi, I am <span className="name">Dung</span>, an experienced full-stack
          developer from Viet Nam, with 1 year of expertise in Java, Node.js,
          and React. Ready to create innovative web solutions! Always eager to
          learn and take on new challenges.
        </p>
        <a
          className="download"
          href="/Resume_LuDinhDung_EN.pdf"
          download
        >
          Download me ↓
        </a>
        <div className="resume">
          <img
            src="data:image/webp;base64,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"
            alt="paper"
            className="resume-img"
          ></img>
          <span className="resume-verify">Yes, that's my resume</span>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;


