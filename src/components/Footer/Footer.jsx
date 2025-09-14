import { easeIn, easeOut, motion } from "framer-motion";
import "./Footer.css";

const getRandomRotation = (min = 320, max = 360) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function Footer() {
  return (
    <footer>
      <motion.div
        className="message-line"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {"Have a good Day.".split(" ").map((e, i) => (
          <Message key={i} word={e} />
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Created by <br />
        Ludinhdung 🖖 2025
      </motion.p>
    </footer>
  );
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.2,
    },
  },
};


const messageVariant = {
  hidden: (custom) => ({
    scale: 0,
    rotate: custom,
  }),
  show: {
    scale: [0, 1.4, 1],
    transition: {
      duration: 0.4,
      ease: "easeOut",
      times: [0, 0.7, 1],
    },
  },
}

const Message = ({ word }) => {
  const randomRotate = getRandomRotation();
  return (
    <motion.span
      className="message"
      custom={randomRotate}
      variants={messageVariant}
    >
      {word}
    </motion.span>
  );
};

export default Footer;
