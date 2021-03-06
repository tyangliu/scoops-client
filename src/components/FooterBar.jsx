'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import styler from 'react-styling';

@Radium
export default class FooterBar extends Component {

  render() {
    return (
      <footer style={styles.footer}>
        <div style={styles.logo} key='footerLogo0'></div>
        <p style={styles.copyText} key='footerCopyText0'>
          <span style={styles.copySpan}>Copyright {new Date().getFullYear()} &copy; SCOOPS</span>
          <span style={styles.copySpan}>Designed by Thomas Liu</span>
        </p>
      </footer>
    );
  }

}

const styles = styler`
  footer
    flex: none
    padding: 11px 24px
    border-top: 1px solid rgba(0,0,0,0.15)
    background: rgba(255,255,255,1)
    z-index: 100

  logo
    background: url('${require('../images/logo-color.svg')}') no-repeat center
    width: 100px
    height: 50px
    float: right

    @media (max-width: 480px)
      width: 64px

  copyText
    color: rgba(24,50,79,0.64)
    float: right
    text-align: right
    margin-right: 24px
    padding-top: 3px
    padding-bottom: 3px
    padding-right: 24px
    border-right: 1px solid rgba(0,0,0,0.1)

    @media (max-width: 480px)
      margin-right: 12px
      padding-right: 12px
      font-size: 0.8em

  copySpan
    display: block
`;
