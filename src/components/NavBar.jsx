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

  render() {
    let inverted = this.props.inverted;
    let children = Children.map(this.props.children, child =>
      <li style={styles.navItem}>{child}</li>
    );

    return (
      <nav style={styles.nav} className="mainNav">
        <Style rules={inverted ? styles.navRulesInverted : styles.navRules} scopeSelector=".mainNav"/>
        <div style={styles.logo}>
          <div style={inverted ? styles.logoImg.inverted : styles.logoImg}></div>
          <p style={inverted ? styles.logoText.inverted : styles.logoText}>
            Science Co-op Students Association
          </p>
        </div>
        <ul style={styles.navList}>{children}</ul>
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

  navList
    float: right

  navItem
    display: inline-block
    font-weight: bold
    text-transform: uppercase
    letter-spacing: 1px
    line-height: 43px
    margin-left: 24px
`;
