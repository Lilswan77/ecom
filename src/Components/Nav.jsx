import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import FAQ from "./FAQ";
import Logo from "./Logo";
import Error from "./Error";

export const Nav = () => {
  return (
    <Router>
      <nav>
        <div className="nav-one">
          <Link to="/Contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="header">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-two">
          <Link to="/faq">FAQ</Link>
          <motion.div>
            <motion.button
              className="logo"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/logo">
                <FontAwesomeIcon icon={faHippo} />
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </nav>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>
        <h1>Footer</h1>
      </footer>
    </Router>
  );
};

export default Nav;
