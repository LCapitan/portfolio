import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Work from '../../pages/work/Work';
import Code from '../../pages/code/Code';
import Websites from '../../pages/sites/Websites';
import Contact from '../../pages/contact/Contact';
import RockstarSteve from '../../pages/rockstarsteve/RockstarSteve';
import Resume from '../../pages/resume/Resume';
import Menu from '../menu/Menu';

class MainApp extends Component {

  render() {

    const {
      lightModeOn: lightMode
    } = this.props

    // console.log(this.props);

    return (
      <div className={lightMode ? 'App LightMode': 'App'}>
        <div className="ContentWrapper">
          <Header/>
          <main>
            <BrowserRouter>
              <Switch>
                <Route path="/about" component={About}/>
                <Route path="/work" component={Work}/>
                <Route path="/code" component={Code}/>
                <Route path="/websites" component={Websites}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/rockstarsteve-proposal" component={RockstarSteve}/>
                <Route path="/resume" component={Resume}/>
                <Route exact path="/" component={Home}/>
              </Switch>
            </BrowserRouter>

            <div className="FtLink Left">
              <a href="/work">work</a>
            </div>

            <div className="FtLink Right">
              <a href="/contact">contact</a>
            </div>
          </main>
          <Footer/>
        </div>

        <Menu/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(
  mapStateToProps
)(MainApp);



