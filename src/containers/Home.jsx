'use strict';

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Radium from 'radium';
import styler from 'react-styling';
import { IconHeading, SectionLink, HEventList, HArticleList } from '../components';

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
    ],
    articles: [
      {
        title: 'Two Scoops to Victory',
        createdOn: '2015-09-13T19:19:53.079Z',
        summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a
          type specimen book...`
      },
      {
        title: 'Lorem Ipsum',
        createdOn: '2015-09-13T19:19:53.079Z',
        summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a
          type specimen book...`
      },
      {
        title: 'Lorem Ipsum',
        createdOn: '2015-09-13T19:19:53.079Z',
        summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a
          type specimen book...`
      }
    ]
  };

  componentWillMount() {
    this.props.setInvertedNav(true);
    this.props.setBackgroundColor('rgba(7,176,193,1)');
  }

  render() {
    return (
      <div>
        <DocumentTitle title='Home - SCOOPS'/>
        <header style={styles.header} key='home0'>
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
        <div>
          <IconHeading icon='event'>Upcoming Events</IconHeading>
          <HEventList events={this.state.events} />
          <SectionLink to='/events'>To All Events</SectionLink>
        </div>
        <div style={styles.articles}>
          <div style={styles.articlesBackground}></div>
          <IconHeading icon='chrome_reader_mode'>The Latest Scoop</IconHeading>
          <HArticleList articles={this.state.articles} />
          <SectionLink to='/blog' inverted={false}>To the Blog</SectionLink>
        </div>
      </div>
    );
  }

}

const styles = styler`
  header
    height: 540px
    padding: 0 24px

    @media (max-width: 480px)
      height: 640px

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

  articles
    z-index: 0
    position: relative
    padding: 20px 0 60px
    overflow-y: hidden

  articlesBackground
    background: rgba(255,255,255,1)
    position: absolute
    top: 220px
    width: 100%
    height: 100%
    z-index: -1
`;
