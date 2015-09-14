'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import styler from 'react-styling';

@Radium
export default class PageHeading extends Component {

  static defaultProps = {
    content: 'Title',
    inverted: true
  }

  render() {
    let inverted = this.props.inverted,
        content  = this.props.children || this.props.content;

    return (
      <header style={inverted ? styles.header.inverted : styles.header.normal}>
        <h1>{content}</h1>
      </header>
    );
  }

}

const styles = styler`
  header
    text-align: center
    margin-top: 90px
    padding: 60px 20px

    &normal

    &inverted
      color: rgba(255,255,255,1)
`;
