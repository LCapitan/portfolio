import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faGithubAlt,
  faCodepen,
  faLinkedin,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';
import './styles.scss';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <ul>
          <li><span className="Copyright">&copy;2019 AJM</span></li>
          <li>
            <ul className="SocialMenu">
              <li>
                <a className="Github" href="https://github.com/LCapitan" target="_blank" rel="noopener noreferrer">
                  <span className="SocialIcon">
                    <FontAwesomeIcon icon={faGithubAlt}/>
                  </span>
                  <span className="SocialName">
                    github
                  </span>
                </a>
              </li>
              <li>
                <a className="Codepen" href="https://codepen.io/LCapitan/" target="_blank" rel="noopener noreferrer">
                  <span className="SocialIcon">
                    <FontAwesomeIcon icon={faCodepen}/>
                  </span>
                  <span className="SocialName">
                    codepen
                  </span>
                </a>
              </li>
              <li>
                <a className="Codepen" href="https://www.linkedin.com/in/austinmelendez/" target="_blank" rel="noopener noreferrer">
                  <span className="SocialIcon">
                    <FontAwesomeIcon icon={faLinkedin}/>
                  </span>
                  <span className="SocialName">
                    linkedin
                  </span>
                </a>
              </li>
              <li>
                <a className="Insta" href="https://www.instagram.com/austinmel/" target="_blank" rel="noopener noreferrer">
                  <span className="SocialIcon">
                    <FontAwesomeIcon icon={faInstagram}/>
                  </span>
                  <span className="SocialName">
                    instagram
                  </span>
                </a>
              </li>
              <li>
                <a className="Insta" href="https://www.facebook.com/austin.j.melendez" target="_blank" rel="noopener noreferrer">
                  <span className="SocialIcon">
                    <FontAwesomeIcon icon={faFacebook}/>
                  </span>
                  <span className="SocialName">
                    facebook
                  </span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;