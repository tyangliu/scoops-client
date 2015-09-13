'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import DocumentTitle from 'react-document-title';
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
      <div>
        <DocumentTitle title='Blog - SCOOPS'/>
        <PageHeading inverted={false}>Blog</PageHeading>
      </div>
    );
  }

}

const styles = styler`
`;
