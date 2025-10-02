import { Link } from "react-router-dom";
import "./RI.css"; // import the CSS file

function RI() {
  return (
    <>
    <h2>RESEARCH & INNOVATION</h2>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to="/RC" className="nav-link">
              Centers
            </Link>
          </li>
          <li>
            <Link to="/IF" className="nav-link">
              Innovation Framework
            </Link>
          </li>
         
          <li>
            <Link to="/SP" className="nav-link">
              Startups
            </Link>
          </li>
          <li>
            <Link to="/IP" className="nav-link">
              Industry Partners
            </Link>
          </li>
        </ul>
      </nav>


      <div>
        <h2>UNIVERSITY OVERVIEW</h2>
        <nav>
            <ul>
                <Link to="./Aboutsu">About SUSSDEU</Link>
                <Link to="./Visionandmission">Vision & Mission</Link>
             
                  <Link to="./CoreValue">University Values</Link>
                   <li>Historical Legacy</li>
            </ul>
        </nav>
      </div>
    </>
  );
}

export default RI;
