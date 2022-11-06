import { motion } from "framer-motion"

const FAQ = () => {
  return (
    <div>
      <motion.div
        className="FAQ-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
      >
        <h1>FAQ</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.6,
        }}
      >
        <div className="FAQ-text">
          <h3>What are the frequenty asked questions?</h3>
          <p>
            I dont know
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ