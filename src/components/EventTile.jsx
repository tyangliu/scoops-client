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

  state = { hovered: false };

  hover = () => this.setState({hovered: true});
  unhover = () => this.setState({hovered: false});

  render() {
    let name = this.props.name,
        startTime = (() => {
          let startTimeObj = new XDate(this.props.startTime), nowObj = new XDate(),
              isThisYear = startTimeObj.getFullYear() == nowObj.getFullYear(),
              format = `ddd, MMMM M${isThisYear ? '' : ', yyyy'}, h:mtt`;
          return startTimeObj.toString(format);
        })(),
        endTime = (new XDate(this.props.endTime)).toString('h:mtt'),
        hovered = this.state.hovered;

    return (
      <Link to=''
            style={styles.eventTile}
            onMouseOver={this.hover}
            onMouseOut={this.unhover}>
        <div style={styles.image} />
        <div style={styles.summary}>
          <h3 style={styles.title[hovered ? 'hovered' : 'normal']}>
            {name}
          </h3>
          <p style={styles.date}>{startTime}&ndash;{endTime}</p>
        </div>
      </Link>
    );
  }

}

const styles = styler`
  eventTile
    width: 100%
    height: 100%
    position: relative
    display: block
    color: rgba(24,50,79,1)
    font-weight: normal

  image
    height: 100%
    background: #4b74b5

  summary
    position: absolute
    padding: 17px 24px 20px
    bottom: 0
    width: 100%
    background: rgba(255,255,255,0.9)

  title
    display: inline-block
    color: rgba(24,50,79,1)
    transition: color 0.15s ease-in-out

    &normal

    &hovered
      color: rgba(75,116,181,1)

  date
    font-size: 13px
    text-transform: uppercase
    letter-spacing: 1px
    opacity: 0.85
`;
