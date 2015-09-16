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
        numEvents = events.length,
        eventTiles = events.map((event,index) =>
          <div style={[styles.eventTileContainer, {
                 width: (1 / numEvents * 100) + '%',
                 '@media (max-width: 1200px)': {
                   width: (numEvents % 2 && index == 0) ? '100%' : '50%'
                 },
                 '@media (max-width: 800px)': {
                   width: '100%'
                 }
               }]}
               key={'eventTile' + index}>
            <EventTile name={event.name}
                       startTime={event.startTime}
                       endTime={event.endTime} />
          </div>
        );

    return (
      <section style={styles.eventList}>
        {eventTiles}
        <div style={styles.clearfix}></div>
      </section>
    );
  }

}

const styles = styler`
  eventList
    box-shadow: 0 1px 6px rgba(0,0,0,0.25)
    width: 100%

  eventTileContainer
    float: left
    height: 300px
    display: inline-block

  clearfix
    clear: both
    display: table

`;
