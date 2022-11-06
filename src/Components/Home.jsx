import { motion } from "framer-motion";


const Home = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5}}
      animate={{ opacity: 1, scale: 1}}
      transition={{
        duration: 0.8,
        delay: 0.5,
      }}>
    <div className="parent-content">
      <p className="text">Designing just got easy.</p>
      <div className="content-box">
        <motion.div
          className="box"
          whileHover={{ scale: 1.1 }}
          drag
          dragConstraints={{ top: -150, right: 150, bottom: 150, left: -150 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          whileTap={{ cursor: "grabbing" }}
        />
      </div>
      </div>
      </motion.div>
  )
}

export default Home