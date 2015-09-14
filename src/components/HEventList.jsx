'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import styler from 'react-styling';
import EventTile from './EventTile.jsx';

@Radium
export default class HEventList extends Component {

  static defaultProps = {
    events: []
  };

  render() {
    let events = this.props.events.slice(0,4),
        eventTiles = events.map((event,index) =>
          <div style={styles.eventTileContainer} key={'eventTile' + index}>
            <EventTile name={event.name}
                       startTime={event.startTime}
                       endTime={event.endTime} />
          </div>
        );

    return (
      <section style={styles.eventList}>
        <div style={styles.listGroup} key='group0'>{eventTiles.slice(0,2)}</div>
        <div style={styles.listGroup} key='group1'>{eventTiles.slice(2,4)}</div>
        <div style={styles.clearfix}></div>
      </section>
    );
  }

}

const styles = styler`
  eventList
    box-shadow: 0 1px 6px rgba(0,0,0,0.25)
    width: 100%

  listGroup
    float: left
    width: 50%
    height: 300px

    @media (max-width: 1200px)
      width: 100%
    @media (max-width: 780px)
      height: 600px

  eventTileContainer
    width: 50%
    height: 300px
    display: inline-block

    @media (max-width: 780px)
      width: 100%
      display: block

  clearfix
    clear: both
    display: table

`;
