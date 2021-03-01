import React, { Component } from 'react';
import ContactPageBg from '../../components/pageBackgrounds/ContactPageBg';
import contactImg from '../../img/astro.png';
import Form from './Form';
import { Route } from 'react-router-dom';
import './styles.scss';

class Contact extends Component {
  render() {
    return (
      <Route>
        <div className="PageContent">
          <figure className="PageBg">
            <ContactPageBg/>
          </figure>

          <div className="MainContent PlusImg">
            <div>
              <div>
                <h1>contact</h1>
              </div>
              <p>If you're interested in working on a project together, just fill out the form below and I'll respond as soon as possible.</p>
              <Form/>
            </div>
          </div>

          <figure className="PageHeroImg ContactShadow">
            <img className="" src={contactImg} alt=""/>
          </figure>
        </div>
      </Route>
    );
  }
}

export default Contact;