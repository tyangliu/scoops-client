'use strict';

import React, { Component, Children } from 'react';
import Radium, { Style } from 'radium';
import styler from 'react-styling';
import TimeoutTransitionGroup from 'timeout-transition-group';
import { Router, Link } from 'react-router';
import { NavBar, FooterBar } from '../components';

@Radium
export default class App extends Component {

  state = {
    inverted: false,
    backgroundColor: 'rgba(255,255,255,1)'
  };

  render() {
    return (
      <div style={styles.app}>
        <Style rules={styles.appRules} />
        <NavBar inverted={this.state.inverted}>
          <Link to='/' onlyActiveOnIndex={true}>Home</Link>
          <Link to='/events'>Events</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/mentorship'>Mentorship</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </NavBar>
        <main style={{
          backgroundColor: this.state.backgroundColor,
          transition: 'background-color 0.2s ease-in-out'
        }}>
          <TimeoutTransitionGroup component='div'
                                  transitionName='page'
                                  enterTimeout={400}
                                  leaveTimeout={400}
                                  transitionLeave={false}>
            {React.cloneElement(this.props.children || <div />, {
              setInvertedNav: inverted => this.setState({inverted: !!inverted}),
              setBackgroundColor: color => this.setState({backgroundColor: color}),
              key: this.props.location.pathname
            })}
          </TimeoutTransitionGroup>
        </main>
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

    div.page-enter
      opacity: 0
      transition: opacity .2s ease-in-out;

    div.page-enter.page-enter-active
      opacity: 1
`;
