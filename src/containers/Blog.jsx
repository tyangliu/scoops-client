'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import styler from 'react-styling';
import { PageHeading, IconHeading } from '../components';

@Radium
export default class Blog extends Component {

  componentWillMount() {
    this.props.setInvertedNav(false);
    this.props.setBackgroundColor('rgba(255,255,255,1)');
  }

  render() {
    return (
      <div style={styles.blog}>
        <PageHeading>Blog</PageHeading>
      </div>
    );
  }

}

const styles = styler`
  blog
    padding-top: 90px
`;
