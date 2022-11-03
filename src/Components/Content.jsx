import { motion } from "framer-motion";

const Content = () => {
  return (
    <div className="parent-content">
      <p className="text">Designing just got easy.</p>
      <div className="content-box">
        <motion.div
          className="cricle"
          whileHover={{ scale: 1.1 }}
          drag
          dragConstraints={{ top: -150, right: 150, bottom: 150, left: -150 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        />
      </div>
    </div>
  );
};

export default Content;
