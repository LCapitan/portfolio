import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomePageBg from '../../components/pageBackgrounds/HomePageBg';
import homeImg from '../../img/austin-computer.png';
import Logo from '../../components/logo/Logo';
import './styles.scss';
import {Route, Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <Route>
        <div className="PageContent">
          <figure className="PageBg">
            <HomePageBg/>
          </figure>

          <div className="MainContent PlusImg Home">
            <Logo/>
            <h1>austin<br/>melendez</h1>

            <div className="SubHeader">
              <p>Artist, designer, and developer from West Palm Beach, Florida.</p>

              <ul className="TwoCol">
                <li>
                  <Link to="/about" className="Button">
                    about
                    <span>
                    <FontAwesomeIcon icon="arrow-right"/>
                  </span>
                  </Link>
                </li>

                <li className="Mobile">
                  <Link to="/contact" className="Button">
                    contact
                    <span>
                    <FontAwesomeIcon icon="arrow-right"/>
                  </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <figure className="PageHeroImg HomeShadow">
            <img src={homeImg} alt=""/>
          </figure>
        </div>
      </Route>
    );
  }
}

export default Home;