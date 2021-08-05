import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';
import { Route, Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <Route>
        <div className="PageContent NoImg">
          <div className="MainContent">
            <h1>about</h1>
            <div className="TwoCol AlignTop">
              <div>
                <p>Hi! My name's Austin. I'm a passionate artist, designer, and developer, born and raised in Hartford, Connecticut, and currently living in West Palm Beach, Florida.</p>
                <p>I've been drawing for as long as I can remember and have always loved anything that revolves around creativity. I began basking in the glory of Adobe's Creative Suite when I was in sixth grade, and haven't stopped since. Once I had the technical skills of art and design down, I was looking for another fun, creative challenge and stumbled into the world of development.</p>
              </div>

              <div>
                <p>I currently work for an NFT Marketplace called <a className="link" href="https://niftys.com" target="_blank" rel="noopener noreferrer">Nifty's</a> as a <em>Designer</em> and <em>React Developer</em> and I'm loving it. Prior to that, I was an <em>Experience Developer</em> at <a className="link" href="https://www.theprimacy.com/" target="_blank" rel="noopener noreferrer">Primacy</a>, a digital marketing agency based out of WPB. And just before that, I worked for <a className="link" href="https://www.travelers.com/" target="_blank" rel="noopener noreferrer">Travelers Insurance</a> as a <em>Graphic Designer</em> on their creative services team.</p>
                <p>Aside from drawing, designing, and developing, I like to spend my free time writing and listening to music, hanging with my pup - Fiz, or just hanging out waiting for some type of inspiration to strike (plus the not-so-occasional binge watching).</p>
                <Link to="/work" className="Button">
                  my work
                  <span>
                  <FontAwesomeIcon icon="arrow-right"/>
                </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Route>
    );
  }
}

export default About;