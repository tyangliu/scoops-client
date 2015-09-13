'use strict';

import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import styler from 'react-styling';
import { Link } from 'react-router';
import { NavBar, FooterBar } from '../components';

@Radium
export default class App extends Component {

  render() {
    return (
      <div style={styles.app}>
        <Style rules={styles.appRules} />
        <NavBar>
          <Link to='/' activeClassName='active' onlyActiveOnIndex={true}>Home</Link>
          <Link to='/events' activeClassName='active'>Events</Link>
          <Link to='/blog' activeClassName='active'>Blog</Link>
          <Link to='/mentorship' activeClassName='active'>Mentorship</Link>
          <Link to='/about' activeClassName='active'>About</Link>
          <Link to='/contact' activeClassName='active'>Contact</Link>
        </NavBar>
        <main>{this.props.children}</main>
        <FooterBar />
      </div>
    );
  }

}

const styles = styler`
  app
    font-family: 'effra', sans-serif
    font-size: 16px
    line-height: 1.4em
    color: rgba(24,50,79,1)
    display: flex
    flex-direction: column
    min-height: 100vh

  appRules
    *
      box-sizing: border-box

    h1, h2
      font-family: 'quatro-slab', serif
      line-height: 1.7em

    h1
      font-size: 39px
      font-weight: 500
      letter-spacing: 1px

    h2
      font-size: 30px

    h3
      font-size: 24px

    a
      text-decoration: none
      font-weight: bold

    main
      flex: 1 0 auto
      width: 100%
`;
