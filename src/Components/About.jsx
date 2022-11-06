import { motion } from "framer-motion"

const About = () => {
  return (
      <div>
      <motion.div
        className="About-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
      >
        <h1>About</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.6,
        }}
      >
        <div className="About-text">
          <h3>What is this About page for?</h3>
          <p>
            I dont know
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About
