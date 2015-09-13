'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import styler from 'react-styling';
import { PageHeading, IconHeading } from '../components';

@Radium
export default class Events extends Component {

  componentWillMount() {
    this.props.setInvertedNav(true);
    this.props.setBackgroundColor('rgba(75,116,181,1)');
  }

  render() {
    return (
      <div style={styles.events}>
        <PageHeading>Events</PageHeading>
        <IconHeading icon='event'>Upcoming</IconHeading>
        <IconHeading icon='history'>Past</IconHeading>
      </div>
    );
  }

}

const styles = styler`
  events
    padding-top: 90px
    background: rgba(75,116,181,1)
`;
