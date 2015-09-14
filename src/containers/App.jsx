'use strict';

import React, { Component, Children } from 'react';
import Radium, { Style } from 'radium';
import styler from 'react-styling';
import { Link } from 'react-router';
import { NavBar, FooterBar } from '../components';

@Radium
export default class App extends Component {

  state = {
    inverted: false,
    backgroundColor: 'rgba(255,255,255,1)'
  }

  render() {
    let children = Children.map(this.props.children, child =>
      React.cloneElement(child, {
        setInvertedNav: inverted => this.setState({inverted: !!inverted}),
        setBackgroundColor: color => this.setState({backgroundColor: color})
      })
    );
    return (
      <div style={styles.app}>
        <Style rules={styles.appRules} />
        <NavBar inverted={this.state.inverted}>
          <Link to='/' activeClassName='active' onlyActiveOnIndex={true}>Home</Link>
          <Link to='/events' activeClassName='active'>Events</Link>
          <Link to='/blog' activeClassName='active'>Blog</Link>
          <Link to='/mentorship' activeClassName='active'>Mentorship</Link>
          <Link to='/about' activeClassName='active'>About</Link>
          <Link to='/contact' activeClassName='active'>Contact</Link>
        </NavBar>
        <main style={{backgroundColor: this.state.backgroundColor}}>{children}</main>
        <FooterBar />
      </div>
    );
  }

}

const styles = styler`
  app
    font-family: 'effra', sans-serif
    font-size: 16px
    line-height: 1.5em
    color: rgba(24,50,79,1)
    display: flex
    flex-direction: column
    min-height: 100vh

  appRules
    *
      box-sizing: border-box

    h1, h2, h3
      font-family: 'quatro-slab', serif
      line-height: 1.5em

    h1
      font-size: 39px
      font-weight: 500
      letter-spacing: 1px

    h2
      font-size: 30px

    h3
      font-size: 24px
      font-weight: 500

    em
      font-style: italic

    a
      color: rgba(75,116,181,1)
      text-decoration: none
      font-weight: bold

    main
      flex: 1 0 auto
      width: 100%
}
`;
