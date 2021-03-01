import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';
import { Route, Link } from 'react-router-dom';

class Work extends Component {
  render() {
    return (
      <Route>
        <div className="PageContent AlignStart NoImg">
          <div className="MainContent">
            <h1>code</h1>
            <div className="SubHeader">
              <p>I'll try to get the point across without sounding too nerdy...</p>
            </div>

            <div className="TwoCol AlignTop">
              <div>
                <p>I'm well-versed in (primarily) HTML5, CSS3, and JavaScript, as well as preprocessors like Sass & Less
                  and JS frameworks such as React and Vue.</p>
                <p>Lately, I prefer to use Webpack and its build tools, but I'm also comfortable with task runners like
                  Grunt and Gulp in conjunction with templating engines like Handlebars or Nunjucks. In conclusion I'm
                  proficient with web development, as well responsive email development, and building banner ads (not
                  too nerdy, actually).</p>
              </div>

              <div>
                <p>Recently, I've started learning how to build 3D models using Sketchup, and also learning how to take
                  those models and build VR scenes with them in Unity, to be viewed/explored through the VR lenses.</p>
                <p>I enjoy development because I'm always presented with a challenge that gives way to the chance to be
                  creative with a new (and arguably more exciting) medium.</p>

                <Link to="/websites" className="Button">
                  view sites
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

export default Work;