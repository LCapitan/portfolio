import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';
import { Route, Link } from 'react-router-dom';

class RockstarSteve extends Component {
  render() {
    return (
      <Route>
        <div className="PageContent NoImg">
          <div className="MainContent">
            <h1>rockstar steve</h1>
            <div className="SubHeader">
              <p>Take a look at the options below and let me know which one works best for you and your business.</p>
            </div>
            <div className="ThreeCol Proposal">
              <div className="Proposal-Card">
                <div className="Proposal-Card-Header">
                  <h2>silver</h2>
                </div>
                <div className="Proposal-Work">
                  <ul>
                    <li>Website Design & Development with CMS</li>
                    <li>Home, About, Travel, Poker, Concerts, and Contact pages</li>
                    <li>Google Analytics</li>
                    <li>Vimeo Integration</li>
                    <li>QA Testing</li>
                  </ul>
                </div>
                <div className="Proposal-Price">
                  <h3>$2000</h3>
                </div>
              </div>

              <div className="Proposal-Card">
                <div className="Proposal-Card-Header">
                  <h2>gold</h2>
                </div>
                <div className="Proposal-Work">
                  <ul>
                    <li>Website Design & Development with CMS</li>
                    <li>Home, About, Travel, Poker, Concerts, and Contact pages</li>
                    <li>Google Analytics</li>
                    <li>Vimeo Integration</li>
                    <li>Live Social Feeds</li>
                    <li>Social Media Sharing</li>
                    <li>Custom Illustrations</li>
                    <li>QA Testing</li>
                  </ul>
                </div>
                <div className="Proposal-Price">
                  <h3>$3000</h3>
                </div>
              </div>

              <div className="Proposal-Card">
                <div className="Proposal-Card-Header">
                  <h2>platinum</h2>
                </div>
                <div className="Proposal-Work">
                  <ul>
                    <li>Website Design & Development with CMS</li>
                    <li>Home, About, and Contact pages</li>
                    <li>Travel, Poker, and Concerts Microsites</li>
                    <li>Google Analytics</li>
                    <li>Vimeo Integration</li>
                    <li>Live Social Feeds</li>
                    <li>Social Media Sharing</li>
                    <li>Custom Illustrations</li>
                    <li>Live Stat Integration</li>
                    <li>Interactive Travel Map</li>
                    <li>Google Photo Integration</li>
                    <li>QA Testing</li>
                  </ul>
                </div>
                <div className="Proposal-Price">
                  <h3>$4500</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Route>
    );
  }
}

export default RockstarSteve;