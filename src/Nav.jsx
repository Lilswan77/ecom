import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo } from "@fortawesome/free-solid-svg-icons";

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
          <button className="logo">
            <a href="http://localhost:3000/"><FontAwesomeIcon icon={faHippo} /></a>
          </button>
        </div>
      </nav>
      <hr className="underline" />
    </div>
  );
};

export default Nav;
