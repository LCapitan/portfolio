import React, { Component } from 'react';
// import Logo from '../../components/logo/Logo';
import './styles.scss';
import { connect } from 'react-redux';
import { toggleLight } from '../../actions';
import { toggleMenu } from '../../actions';

class Menu extends Component {

  handleLightModeClick = () => {
    this.props.dispatch(toggleLight());
  }

  handleMenuClick = () => {
    this.props.dispatch(toggleMenu());
  }

  render() {
    // console.log(this.props);

    const {
      menuIsOpen: isOpen
    } = this.props

    return (
      <nav className={isOpen ? 'MenuIsOpen': ''}>
        <ul className="NavMenu">
          <li>
            <ul className="MainMenu">
              <li>
                <a href="/code">dev</a>
              </li>
              <li>
                <a href="https://www.instagram.com/austinmelart/" target="_blank" rel="noopener noreferrer">art</a>
              </li>
              <li>
                <a href="/about">bio</a>
              </li>
              <li>
                <a href="/" className="MobileHome">home</a>
              </li>
            </ul>
          </li>

          <li className="OptionsPanel">
            <button className="MenuButton" onClick={this.handleLightModeClick}>
              <span className="sr-only">Toggle Theme Color</span>
              <span className="LightModeToggle">
              <span className="SunMoon">
                <span className="Accents"></span>
              </span>
            </span>
            </button>
          </li>

          <div className="FtLink Left">
            <a href="/contact">contact</a>
          </div>

          <div className="FtLink Right">
            <a href="/">home</a>
          </div>

          <button className="CloseMenu" onClick={this.handleMenuClick}>
            <span className="sr-only">Close</span>
          </button>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(
  mapStateToProps
)(Menu);