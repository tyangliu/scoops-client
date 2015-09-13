'use strict';

import React, { Component } from 'react';
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
        <PageHeading>Mentorship Program</PageHeading>
      </div>
    );
  }

}

const styles = styler`
`;
