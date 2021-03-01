import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

class Work extends Component {
  render() {
    return (
      <div className="PageContent Portfolio NoImg">
        <div className="MainContent">
          <h1>websites</h1>
          <div className="SubHeader">
            <p>Here are a few of the most recent sites I've built. <em>(Feel free to reach out to view other various projects)</em>.</p>
          </div>

          <div className="TwoCol">
            <div>
              <div className="ProjectDetails">
                <h2>i2Verify</h2>
                <p>site redesign using React and Next.js, on Prismic CMS</p>
                <a href="https://i2verify.com/" className="Button" target="_blank" rel="noopener noreferrer">
                  view site
                  <span>
                  <FontAwesomeIcon icon="arrow-right"/>
                </span>
                </a>
              </div>
            </div>

            <div>
              <div className="ProjectDetails">
                <h2>Joslin Diabetes Center</h2>
                <p>site redesign using CSS Grid and Webpack, on Drupal CMS</p>
                <a href="https://www.kansashealthsystem.com/" className="Button" target="_blank" rel="noopener noreferrer">
                  view site
                  <span>
                  <FontAwesomeIcon icon="arrow-right"/>
                </span>
                </a>
              </div>
            </div>

            <div>
              <div className="ProjectDetails">
                <h2>TUKHS</h2>
                <p>site redesign using Bootstrap, on Sitecore CMS</p>
                <a href="https://www.kansashealthsystem.com/" className="Button" target="_blank" rel="noopener noreferrer">
                  view site
                  <span>
                  <FontAwesomeIcon icon="arrow-right"/>
                </span>
                </a>
              </div>
            </div>

            <div>
              <div className="ProjectDetails">
                <h2>Curry College</h2>
                <p>site redesign using Bootstrap, built on Ingeniux CMS</p>
                <a href="https://www.curry.edu/" className="Button" target="_blank" rel="noopener noreferrer">
                  view site
                  <span>
                  <FontAwesomeIcon icon="arrow-right"/>
                </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;