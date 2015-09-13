'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import styler from 'react-styling';

@Radium
export default class IconHeading extends Component {

  static defaultProps = {
    inverted: true,
    content: 'Title',
    icon: 'face'
  };

  render() {
    let inverted = this.props.inverted,
        content  = this.props.children || this.props.content;

    return (
      <h2 style={styles.heading}>
        <i style={inverted ? styles.icon.inverted : styles.icon} className='material-icons'>
          {this.props.icon}
        </i>
        <span style={inverted ? styles.titleText.inverted : styles.titleText}>
          {content}
        </span>
      </h2>
    );
  }

}

const styles = styler `
  heading
    width: 100%
    text-align: center
    padding: 10px 0

  icon
    font-size: 36px
    display: block

    &inverted
      opacity: 0.4

  titleText
    font-family: 'effra', sans-serif
    font-weight: bold
    font-size: 24px
    text-transform: uppercase
    letter-spacing: 1px
    display: block

    &inverted
      color: rgba(255,255,255,1)
`;
