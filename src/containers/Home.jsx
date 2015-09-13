'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import styler from 'react-styling';
import { IconHeading, SectionLink, HEventList } from '../components';

@Radium
export default class Home extends Component {

  state = {
    events: [
      {
        name: 'Krispy Kreme Sale',
        startTime: '2015-09-13T19:19:53.079Z',
        endTime: '2015-09-13T19:19:53.079Z'
      },
      {
        name: 'Mentorship Kickoff',
        startTime: '2015-09-13T19:19:53.079Z',
        endTime: '2015-09-13T19:19:53.079Z'
      },
      {
        name: 'MICE',
        startTime: '2015-09-13T19:19:53.079Z',
        endTime: '2015-09-13T19:19:53.079Z'
      },
      {
        name: 'Interview Workshop',
        startTime: '2015-09-13T19:19:53.079Z',
        endTime: '2015-09-13T19:19:53.079Z'
      }
    ]
  }

  render() {
    return (
      <div style={styles.home}>

        <header style={styles.header}>
          <div style={styles.headerText}>
            <h1>Where the Sciences Come Together at UBC</h1>
            <p style={styles.caption}>
              <span style={styles.newLine}>
                A students association with
                <span style={styles.emphasized}> events </span>and
                <span style={styles.emphasized}> workshops </span>
              </span>
              <span style={styles.newLine}>
                for past, current, and future science co-op students
              </span>
            </p>
          </div>
        </header>

        <IconHeading icon='event'>Upcoming Events</IconHeading>
        <HEventList events={this.state.events} />
        <SectionLink to='/events'>To All Events</SectionLink>

        <IconHeading icon='chrome_reader_mode'>The Latest Scoop</IconHeading>
        <SectionLink to='/blog'>To the Blog</SectionLink>

      </div>
    );
  }

}

const styles = styler`
  home
    background: rgba(48,161,196,1)

  header
    height: 460px

  headerText
    text-align: center
    color: rgba(255,255,255,1)
    position: relative
    top: 50%
    transform: translateY(-50%)

  caption
    margin-top: 14px

  newLine
    display: block

  emphasized
    font-weight: bold
    text-transform: uppercase
    letter-spacing: 1px
`;
