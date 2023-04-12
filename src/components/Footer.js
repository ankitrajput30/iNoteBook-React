import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../Footer.css";

function Footer() {
  return (
    <div className="container">
      <div className="content1">
        {/* Add your content here */}
      </div>
      <footer className="footer">
        <ul className="social-icons">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
        <p className="copyright">&copy; 2023 iNoteBook</p>
      </footer>
    </div>
  );
}

export default Footer;
