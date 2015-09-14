'use strict';

import React, { Component, Children } from 'react';
import Radium, { Style } from 'radium';
import styler from 'react-styling';
import { Link } from 'react-router';

@Radium
export default class NavBar extends Component {

  static defaultProps = {
    inverted: true
  };

  state = {
    mobileMenuOpen: false
  };

  toggleMenu = () => this.setState({mobileMenuOpen: !this.state.mobileMenuOpen});
  closeMenu = () => this.setState({mobileMenuOpen: false});

  render() {
    let inverted = this.props.inverted,
        mobileMenuOpen = this.state.mobileMenuOpen;

    let children = Children.map(this.props.children, (child, index) =>
      <li style={styles.navItem}
          key={'navItem' + index}
          onClick={this.closeMenu}>
        {child}
      </li>
    );

    let navStyles = mobileMenuOpen
      ? (inverted ? styles.nav.openInverted : styles.nav.open)
      : styles.nav;

    return (
      <nav style={navStyles} className="mainNav">
        <Style rules={inverted ? styles.navRulesInverted : styles.navRules} scopeSelector=".mainNav"/>
        <div style={styles.logo}>
          <div style={inverted ? styles.logoImg.inverted : styles.logoImg}></div>
          <p style={inverted ? styles.logoText.inverted : styles.logoText} key='logoText0'>
            Science Co-op Students Association
          </p>
        </div>
        <button style={inverted ? styles.menuToggle.inverted : styles.menuToggle}
                key='menuToggle0'
                onClick={this.toggleMenu}>
          <i style={styles.menuToggleIcon} className='material-icons'>{mobileMenuOpen ? 'close' : 'menu'}</i>
        </button>
        <ul style={mobileMenuOpen ? styles.navListOpen : styles.navList}
            key='navList0'>
          {children}
        </ul>
      </nav>
    );
  }

}

const styles = styler`
  nav
    height: 90px
    padding: 20px 24px
    position: absolute
    top: 0
    width: 100%

    &open
      @media (max-width: 800px)
        background: rgba(255,255,255,0.8)
        z-index: 10
        height: auto

    &openInverted
      @media (max-width: 800px)
        background: rgba(24,50,79,0.7)
        z-index: 10
        height: auto

  navRules
    a
      color: rgba(75,116,181,1)
      display: block

    a.active
      border-bottom: 2px solid rgba(75,116,181,1)

  navRulesInverted
    a
      color: rgba(255,255,255,1)
      display: block

    a.active
      border-bottom: 2px solid rgba(255,255,255,1)

  logo
    float: left

  logoImg
    background: url('${require('../images/logo-color.svg')}') no-repeat center
    width: 94px
    height: 47px
    float: left

    &inverted
      background: url('${require('../images/logo-white.svg')}') no-repeat center

  logoText
    font-weight: 500
    line-height: 47px
    margin-left: 24px
    float: left
    opacity: 0.6

    &inverted
      color: rgba(255,255,255,1)

    @media (max-width: 1020px)
      display: none

  menuToggle
    display: none
    background: none
    outline: none
    border: none
    color: rgba(75,116,181,1)

    &inverted
      color: rgba(255,255,255,1)

    @media (max-width: 800px)
      display: block
      float: right

  menuToggleIcon
    font-size: 30px
    line-height: 36px

  navList
    float: right

    @media (max-width: 800px)
      float: none
      width: 100%
      opacity: 0
      pointer-events: none
      margin-top: 90px

  navListOpen
    float: right

    @media (max-width: 800px)
      float: none
      margin-top: 90px
      width: 100%

  navItem
    display: inline-block
    font-weight: bold
    text-transform: uppercase
    letter-spacing: 1px
    line-height: 43px
    margin-left: 24px

    @media (max-width: 800px)
      display: block
      padding:  12px 24px
      text-align: center
      margin-left: 0
`;
