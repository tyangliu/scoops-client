'use strict';

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Radium from 'radium';
import styler from 'react-styling';
import { PageHeading, IconHeading } from '../components';

@Radium
export default class Mentorship extends Component {

  componentWillMount() {
    this.props.setInvertedNav(true);
    this.props.setBackgroundColor('rgba(226,113,77,1)');
  }

  render() {
    return (
      <div>
        <DocumentTitle title='Mentorship Program - SCOOPS'/>
        <PageHeading>Mentorship Program</PageHeading>
      </div>
    );
  }

}

const styles = styler`
`;
