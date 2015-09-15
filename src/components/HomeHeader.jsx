'use strict';

import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import styler from 'react-styling';
import TimeoutTransitionGroup from 'timeout-transition-group';

@Radium
export default class HomeHeader extends Component {

  static defaultProps = {
    carouselTexts: [
      'ace my interviews',
      'explore the world through co-op',
      'meet other co-op students',
      'get my dream job',
      'express my love for science',
      'get more lab experience',
      'have fun during a work term',
      'become a wizard'
    ]
  };

  state = {
    carouselIndex: Math.floor(Math.random() * this.props.carouselTexts.length || 0)
  };

  calcIndex = () => {
    let length    = this.props.carouselTexts.length,
        currIndex = this.state.carouselIndex || 0,
        nextIndex = currIndex;

    while (nextIndex == currIndex) {
      nextIndex = Math.floor(Math.random() * length);
    }

    return nextIndex;
  };

  tick = () => this.setState({carouselIndex: this.calcIndex()});

  componentDidMount() {
    this.timer = setInterval(this.tick, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    let carouselTexts = this.props.carouselTexts, i = this.state.carouselIndex;

    return (
      <div style={styles.headerText} key='headerText0'>
        <Style rules={styles.headerTextRules} />
        <h1 style={styles.headerTitle}>
          <span style={styles.carouselTextBefore} key='carouselTextBefore0'>
            How can I&nbsp;
          </span>
          <span style={styles.carouselText} ref='carouselText'>
            <TimeoutTransitionGroup
              component='span'
              transitionName='carousel'
              enterTimeout={400}
              leaveTimeout={400}
              transitionLeave={false}>
                <span key={'carouselTextInner' + i}>{carouselTexts[i]}</span>
            </TimeoutTransitionGroup>
          </span>
          <span style={styles.carouselTextAfter}>?</span>
        </h1>
        <p style={styles.caption}>
          We host
          <span style={styles.emphasized}> events </span>and
          <span style={styles.emphasized}> workshops </span>
          to answer your questions&nbsp;
          <span style={styles.newLine}
                key='headerCaptionText0'>
            and help you get the most out of your science co-op experience.
          </span>
        </p>
      </div>
    );
  }

}

const styles = styler`
  headerText
    margin-left: 10%
    text-align: left
    color: rgba(255,255,255,0.75)
    position: relative
    top: 50%
    transform: translateY(-50%)

    @media (max-width: 800px)
      margin-left: 0

  headerTextRules
    span.carousel-enter
      opacity: 0
      transition: opacity .4s ease-in-out;

    span.carousel-enter.carousel-enter-active
      opacity: 1

    span.carousel-leave
      opacity: 0
      transition: opacity .4s ease-in-out

    span.carousel-leave.carousel-leave-active
      opacity: 1

  headerTitle
    position: relative

  carouselTextBefore
    margin-right: 14px

    @media (max-width: 540px)
      display: inline-block

  carouselText
    color: rgba(255,255,255,1)
    display: inline
    border-bottom: 3px solid rgba(255,255,255,0.5)
    font-style: italic
    margin-right: 14px

  carouselTextAfter

  caption
    color: rgba(255,255,255,0.9)
    margin-top: 24px

  newLine
    display: block

    @media (max-width: 540px)
      display: inline

  emphasized
    font-weight: bold
    text-transform: uppercase
    letter-spacing: 1px
`;
