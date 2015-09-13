'use strict';

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Radium from 'radium';
import styler from 'react-styling';

@Radium
export default class Contact extends Component {

  componentWillMount() {
    this.props.setInvertedNav(false);
    this.props.setBackgroundColor('rgba(255,255,255,1)');
  }

  render() {
    return (
      <div>
        <DocumentTitle title='Contact - SCOOPS'/>
      </div>
    );
  }

}

const styles = styler`
`;
