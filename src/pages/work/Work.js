import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WorkPageBg from '../../components/pageBackgrounds/WorkPageBg';
import workImg from '../../img/c&h.png';
import './styles.scss';
import {Route, Link} from 'react-router-dom';

class Work extends Component {
  render() {
    return (
      <Route>
        <div className="PageContent">
          <figure className="PageBg">
            <WorkPageBg/>
          </figure>

          <div className="MainContent PlusImg">
            <h1>work</h1>
            <q>As my artist's statement explains, my work is utterly incomprehensible and is therefore full of deep significance.</q>
            <p className="Author">- Calvin, <em>Calvin & Hobbes</em></p>

            <ul className="TwoCol">
              <li>
                <Link to="/code" className="Button">
                  web work
                  <span>
                  <FontAwesomeIcon icon="arrow-right"/>
                </span>
                </Link>
              </li>

              <li>
                <a href="https://www.instagram.com/austinmelart/" target="_blank" rel="noopener noreferrer" className="Button">
                  art work
                  <span>
                  <FontAwesomeIcon icon="arrow-right"/>
                </span>
                </a>
              </li>
            </ul>
          </div>

          <figure className="PageHeroImg WorkShadow">
            <img src={workImg} alt=""/>
          </figure>
        </div>
      </Route>
    );
  }
}

export default Work;