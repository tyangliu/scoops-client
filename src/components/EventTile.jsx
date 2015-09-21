'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import styler from 'react-styling';
import { Link } from 'react-router';
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
          return startTimeObj.toString(format);
        })(),
        endTime = (new XDate(this.props.endTime)).toString('h:mtt'),
        imagePath = this.props.imagePath;

    let imageStyles = [styles.image];

    imagePath && imageStyles.push({
      backgroundImage: `url('${imagePath}')`
    });

    return (
      <div style={styles.eventTile}>
        <Link to=''>
          <div style={imageStyles} />
        </Link>
        <div style={styles.summary}>
          <Link to=''>
            <h3 style={styles.title}>{name}</h3>
          </Link>
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

  image
    height: 100%
    background-color: #4b74b5
    background-size: cover
    background-repeat: no-repeat
    background-position: center

  summary
    position: absolute
    padding: 17px 24px 20px
    bottom: 0
    width: 100%
    background: rgba(255,255,255,0.95)

  title
    display: inline-block
    line-height: 33px
    transition: color 0.1s ease-in-out
    color: rgba(24,50,79,1)

    :hover
      color: rgba(7,176,193,1)

  date
    font-size: 13px
    text-transform: uppercase
    letter-spacing: 1px
    opacity: 0.85
`;
