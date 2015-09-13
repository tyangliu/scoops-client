'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import styler from 'react-styling';

@Radium
export default class FooterBar extends Component {

  render() {
    return (
      <footer style={styles.footer}>
        <div style={styles.logo}></div>
        <p style={styles.copyText}>
          <span style={styles.copySpan}>Copyright {new Date().getFullYear()} &copy; SCOOPS</span>
          <span style={styles.copySpan}>Designed by Thomas Liu</span>
        </p>
      </footer>
    );
  }

}

const styles = styler `
  footer
    flex: none
    padding: 11px 24px
    border-top: 1px solid rgba(0,0,0,0.1)

  logo
    background: url('${require('../images/logo-color.svg')}') no-repeat center
    width: 100px
    height: 50px
    float: right

  copyText
    float: right
    text-align: right
    margin-right: 24px
    padding: 3px 24px 3px 0
    border-right: 1px solid rgba(0,0,0,0.1)

  copySpan
    display: block
`;
