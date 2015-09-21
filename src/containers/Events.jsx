'use strict';

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Radium from 'radium';
import styler from 'react-styling';
import { PageHeading, IconHeading, EventTile } from '../components';

@Radium
export default class Events extends Component {

  state = {
    events: [
      {
        name: 'Krispy Kreme Sale',
        startTime: '2015-09-13T19:19:53.079Z',
        endTime: '2015-09-13T19:19:53.079Z',
        imagePath: require('../images/mice_photo3.jpg')
      },
      {
        name: 'Mentorship Kickoff',
        startTime: '2015-09-13T19:19:53.079Z',
        endTime: '2015-09-13T19:19:53.079Z',
        imagePath: require('../images/movember_photo1.jpg')
      },
      {
        name: 'MICE',
        startTime: '2015-09-13T19:19:53.079Z',
        endTime: '2015-09-13T19:19:53.079Z',
        imagePath: require('../images/temp-mabel.jpg')
      },
      {
        name: 'Interview Workshop',
        startTime: '2015-09-13T19:19:53.079Z',
        endTime: '2015-09-13T19:19:53.079Z',
        imagePath: require('../images/movember_photo3.jpg')
      }
    ]
  }

  componentWillMount() {
    this.props.setInvertedNav(true);
    this.props.setBackgroundColor('rgba(75,116,181,1)');
  }

  render() {
    let eventTiles = this.state.events.map((event,index) =>
      <div style={styles.eventTileContainer}
           key={'eventTileContainer' + index}>
        <EventTile name={event.name}
                   startTime={event.startTime}
                   endTime={event.endTime}
                   imagePath={event.imagePath} />
      </div>
    );

    return (
      <div style={styles.events}>
        <DocumentTitle title='Events - SCOOPS'/>
        <PageHeading>Events</PageHeading>
        <div style={styles.eventsList}>
          <div style={[styles.eventsListBackground, {
                 background: 'rgba(255,255,255,1)'
               }]} />
          <IconHeading icon='event'>Upcoming</IconHeading>
          <div style={styles.eventTiles}>{eventTiles.slice(0,2)}</div>
        </div>
        <div style={styles.eventsList}>
          <div style={styles.eventsListBackground} />
          <IconHeading icon='history'>Past</IconHeading>
          <div style={styles.eventTiles}>{eventTiles.slice(2,4)}</div>
        </div>
      </div>
    );
  }

}

const styles = styler`
  events
    position: relative
    margin-bottom: 60px

  eventsList
    z-index: 0
    position: relative
    padding: 20px 0 0
    overflow-y: hidden

  eventsListBackground
    background: 'rgba(255,255,255,1)'
    position: absolute
    top: 220px
    left: 0
    width: 100%
    height: 100%
    z-index: -1

  eventTiles
    box-shadow: 0 1px 6px rgba(0,0,0,0.25)
    margin: 0 auto

  eventTileContainer
    float: left
    width: 50%
    height: 360px

    @media (max-width: 1200px)
      height: 300px

    @media (max-width: 800px)
      width: 100%
`;
