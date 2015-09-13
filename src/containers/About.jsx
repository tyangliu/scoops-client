'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import styler from 'react-styling';
import { PageHeading, IconHeading } from '../components';

@Radium
export default class About extends Component {

  render() {
    return (
      <div style={styles.about}>
        <PageHeading>About <em>SCOOPS</em></PageHeading>
        <IconHeading icon='face'>The Team</IconHeading>
      </div>
    );
  }

}

const styles = styler`
  about
    padding-top: 90px
    background: rgba(68,137,193,1)
`;
