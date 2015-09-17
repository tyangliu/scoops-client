'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import styler from 'react-styling';
import XDate from 'xdate';

@Radium
export default class EventTile extends Component {

  static defaultProps = {
    name: 'Event Name',
    startTime: '',
    endTime: ''
  };

  render() {
    let name = this.props.name,
        startTime = (() => {
          let startTimeObj = new XDate(this.props.startTime), nowObj = new XDate(),
              isThisYear = startTimeObj.getFullYear() == nowObj.getFullYear(),
              format = `ddd, MMMM M${isThisYear ? '' : ', yyyy'}, h:mtt`;
          return (startTimeObj).toString(format);
        })(),
        endTime = (new XDate(this.props.endTime)).toString('h:mtt');

    return (
      <div style={styles.eventTile}>
        <div style={styles.thumbnail}></div>
        <div style={styles.summary}>
          <h3>{name}</h3>
          <p style={styles.date}>{startTime}&ndash;{endTime}</p>
        </div>
      </div>
    );
  }

}

const styles = styler`
  eventTile
    width: 100%
    height: 100%
    position: relative

  thumbnail
    height: 100%
    background: #4b74b5

  summary
    position: absolute
    padding: 17px 24px 20px
    bottom: 0
    width: 100%
    background: rgba(255,255,255,0.9)

  date
    font-size: 13px
    text-transform: uppercase
    letter-spacing: 1px
    opacity: 0.85
`;
