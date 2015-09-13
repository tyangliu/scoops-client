'use strict';

import React, { Component } from 'react';
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
      <div></div>
    );
  }

}

const styles = styler`
`;
