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
      <li style={styles.navItem} key={'navItem' + index} onClick={this.closeMenu}>
        {React.cloneElement(child, {activeClassName: 'active'})}
      </li>
    );

    let navStyles = styles.nav[
      mobileMenuOpen ? (inverted ? 'openInverted' : 'open') : 'normal'
    ];

    return (
      <nav style={navStyles} className="mainNav">
        <Style rules={styles[inverted ? 'navRulesInverted' : 'navRules']}
               scopeSelector=".mainNav"/>
        <div style={styles.logo}>
          <Link to='/'
                style={styles.logoImg[inverted ? 'inverted' : 'normal']}
                onClick={this.closeMenu} />
          <p style={styles.logoText[inverted ? 'inverted' : 'normal']}
             key='logoText0'>
            Science Co-op Students Association
          </p>
        </div>
        <button style={styles.menuToggle[inverted ? 'inverted' : 'normal']}
                key='menuToggle0'
                onClick={this.toggleMenu}>
          <i style={styles.menuToggleIcon} className='material-icons'>
            {mobileMenuOpen ? 'close' : 'menu'}
          </i>
        </button>
        <ul style={styles[mobileMenuOpen ? 'navListOpen' : 'navList']}
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
    z-index: 100
    width: 100%

    &normal

    &open
      @media (max-width: 800px)
        background: rgba(255,255,255,0.9)
        transition: background 0.15s ease-in-out
        height: auto

    &openInverted
      @media (max-width: 800px)
        background: rgba(24,50,79,0.8)
        transition: background 0.15s ease-in-out
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

    &normal

    &inverted
      background: url('${require('../images/logo-white.svg')}') no-repeat center

  logoText
    font-weight: 500
    line-height: 47px
    margin-left: 24px
    float: left
    opacity: 0.6

    @media (max-width: 1020px)
      display: none

    &normal

    &inverted
      color: rgba(255,255,255,1)

  menuToggle
    display: none
    background: none
    outline: none
    border: none
    padding: 0
    color: rgba(75,116,181,1)

    @media (max-width: 800px)
      display: block
      float: right

    &normal

    &inverted
      color: rgba(255,255,255,1)

  menuToggleIcon
    font-size: 30px
    line-height: 37px
    margin-top: 4px

  navList
    float: right
    padding-top: 5px
    padding-bottom: 5px

    @media (max-width: 800px)
      float: none
      width: 100%
      opacity: 0
      transition: opacity 0.15s ease-in-out
      margin-top: 90px
      pointer-events: none
      padding-bottom: 36px

  navListOpen
    float: right
    padding-top: 5px
    padding-bottom: 5px

    @media (max-width: 800px)
      float: none
      width: 100%
      opacity: 1
      transition: opacity 0.15s ease-in-out
      margin-top: 90px
      padding-bottom: 36px

  navItem
    display: inline-block
    font-size: 15px
    font-weight: bold
    text-transform: uppercase
    letter-spacing: 1px
    line-height: 37px
    margin-left: 24px

    @media (max-width: 800px)
      display: block
      padding:  12px 24px
      text-align: center
      margin-left: 0
`;
