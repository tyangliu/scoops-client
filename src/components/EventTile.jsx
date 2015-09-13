'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import styler from 'react-styling';
import moment from 'moment';

@Radium
export default class EventTile extends Component {

  static defaultProps = {
    name: 'Event Name',
    startTime: '',
    endTime: ''
  };

  render() {
    let name = this.props.name,
        startTime = moment(this.props.startTime).format('ddd, MMMM M, YYYY, h:MMA'),
        endTime = moment(this.props.endTime).format('h:MMA');

    return (
      <div style={styles.eventTile}>
        <div style={styles.thumbnail}></div>
        <div style={styles.summary}>
          <h3>{name}</h3>
          <p>{startTime}-{endTime}</p>
        </div>
      </div>
    );
  }

}

const styles = styler `
  eventTile
    width: 100%
    height: 100%
    position: relative

  thumbnail
    height: 100%
    background: #4b74b5

  summary
    position: absolute
    padding: 14px 24px
    bottom: 0
    width: 100%
    background: rgba(255,255,255,0.9)
`;
