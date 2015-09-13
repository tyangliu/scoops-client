'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import styler from 'react-styling';

@Radium
export default class PageHeading extends Component {

  static defaultProps = {
    content: 'Title'
  }

  render() {
    let content = this.props.children || this.props.content;
    return (
      <header style={styles.header}>
        <h1>{content}</h1>
      </header>
    );
  }

}

const styles = styler`
  header
    color: rgba(255,255,255,1)
    text-align: center
    margin-top: 90px
    padding: 60px 20px
`;
