'use strict';

import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Radium from 'radium';
import styler from 'react-styling';
import {
  HomeHeader,
  IconHeading,
  SectionLink,
  HEventList,
  HArticleList
} from '../components';

@Radium
export default class Home extends Component {

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
    ],
    articles: [
      {
        title: 'Two Scoops to Victory',
        createdOn: '2015-09-13T19:19:53.079Z',
        summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a
          type specimen book...`,
        imagePath: require('../images/mice_photo3.jpg'),
        color: 'rgba(235,133,64,.7)'
      },
      {
        title: 'Day of the Longboat',
        createdOn: '2015-09-13T19:19:53.079Z',
        summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a
          type specimen book...`,
        imagePath: require('../images/movember_photo1.jpg'),
        color: 'rgba(22,180,239,.7)'
      },
      {
        title: 'Cool Down with Nitrogen',
        createdOn: '2015-09-13T19:19:53.079Z',
        summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a
          type specimen book...`,
        imagePath: require('../images/temp-mabel.jpg'),
        color: 'rgba(46,183,183,.7)'
      }
    ]
  };

  componentWillMount() {
    this.props.setInvertedNav(true);
    this.props.setBackgroundColor('rgba(7,176,193,1)');
  }

  render() {
    return (
      <div style={styles.home}>
        <DocumentTitle title='Home - SCOOPS'/>
        <div style={styles.background} key='homeBackground0' />
        <header style={styles.header} key='homeHeader0'>
          <HomeHeader />
        </header>
        <p style={styles.backgroundCaption} key='backgroundCaption0'>
          <i className='material-icons' style={styles.backgroundCaptionIcon}>
            photo_camera
          </i>
          <span><em>SCOOPS</em> at Day of the Longboat 2014</span>
        </p>
        <div>
          <IconHeading icon='event'>Upcoming Events</IconHeading>
          <HEventList events={this.state.events} />
          <SectionLink to='/events'>To All Events</SectionLink>
        </div>
        <div style={styles.articles}>
          <div style={styles.articlesBackground} />
          <IconHeading icon='chrome_reader_mode'>The Latest Scoop</IconHeading>
          <HArticleList articles={this.state.articles} />
          <SectionLink to='/blog' inverted={false}>To the Blog</SectionLink>
        </div>
        <div style={styles.subscribe}>
          <h3>Stay current with <em>SCOOPS</em></h3>
          <p style={styles.subscribeDescription}>
            Get updates on the latest events, news, and deadlines delivered to your email
          </p>
        </div>
      </div>
    );
  }

}

const styles = styler`
  home
    position: relative
    z-index: 0

  background
    position: fixed
    top: 0
    width: 100vw
    height: 120vh
    z-index: -10
    background-image: url('${require('../images/longboat.jpg')}')
    background-position: center
    background-repeat: no-repeat
    background-size: cover

    @media (max-device-width: 800px)
      transition: height 999999s

    @media (max-device-width: 800px) and (orientation: landscape)
      height: 100vw

  backgroundCaption
    margin-left: 10%
    padding: 0 24px 24px
    font-size: 14px
    color: rgba(255,255,255,0.5)

    @media (max-width: 800px)
      margin-left: 0

  backgroundCaptionIcon
    font-size: 18px
    line-height: 24px
    text-align: left
    float: left
    margin: 0 8px 8px 0
    opacity: 0.6

  header
    height: 540px
    padding: 0 24px

    @media (max-width: 480px)
      height: 640px

  articles
    z-index: 0
    position: relative
    padding: 20px 0
    overflow-y: hidden

  articlesBackground
    background: rgba(255,255,255,1)
    position: absolute
    top: 220px
    width: 100%
    height: 100%
    z-index: -1

  subscribe
    background: rgba(75,116,181,1)
    color: rgba(255,255,255,1)
    padding: 48px 24px
    text-align: center

  subscribeDescription
    opacity: 0.75
`;
