import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <motion.div
        className="Contact-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
      >
        <h1>Contact</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.6,
        }}
      >
        <div className="Content-text">
          <h3>What is this contact page for?</h3>
          <p>
            I dont know
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
