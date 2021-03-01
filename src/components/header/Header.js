import React, { Component } from 'react';
import Logo from '../../components/logo/Logo';
import './styles.scss';
import { connect } from 'react-redux';
import { toggleMenu } from '../../actions';
import { Route } from 'react-router-dom';

class Header extends Component {

  handleMenuClick = () => {
    this.props.dispatch(toggleMenu());
  }

  render() {
    // console.log(this.props);

    return (
      <header className="Header">
        <ul>
          <li>
            <a href="/">
              <Logo/>
            </a>
          </li>
          <li>
            <button className="MenuButton" onClick={this.handleMenuClick}>
              <div className="MenuButtonWrapper">
                <div className="MenuDots">
                  <span className="Circle DotOne"></span>
                  <span className="Circle DotTwo"></span>
                  <span className="Circle DotThree"></span>
                </div>
              </div>
            </button>
          </li>
        </ul>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(
  mapStateToProps
)(Header);