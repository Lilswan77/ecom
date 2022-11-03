import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export const Nav = () => {
  return (
    <div>
      <nav>
        <div className="nav-one">
          <p>
            <a href="http://localhost:3000/">Hello World</a>
          </p>
          <p>
            <a href="http://localhost:3000/">Hello World</a>
          </p>
        </div>
        <div className="header">
          <p>
            <a href="http://localhost:3000/">Hello World</a>
          </p>
        </div>
        <div className="nav-two">
          <p>
            <a href="http://localhost:3000/">Hello World</a>
          </p>
          <motion.div>
            <motion.button
              className="logo"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="http://localhost:3000/">
                <FontAwesomeIcon icon={faHippo} />
              </a>
            </motion.button>
          </motion.div>
        </div>
      </nav>
      <hr className="underline" />
    </div>
  );
};

export default Nav;
