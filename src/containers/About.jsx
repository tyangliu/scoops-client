'use strict';

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Radium from 'radium';
import styler from 'react-styling';
import { PageHeading, IconHeading } from '../components';

@Radium
export default class About extends Component {

  componentWillMount() {
    this.props.setInvertedNav(true);
    this.props.setBackgroundColor('rgba(68,137,193,1)');
  }

  render() {
    return (
      <div>
        <DocumentTitle title='About - SCOOPS'/>
        <PageHeading>About <em>SCOOPS</em></PageHeading>
        <IconHeading icon='face'>The Team</IconHeading>
      </div>
    );
  }

}

const styles = styler`
`;
