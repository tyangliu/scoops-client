'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import styler from 'react-styling';
import { Link } from 'react-router';
import XDate from 'xdate';

@Radium
export default class ArticleTile extends Component {

  static defaultProps = {
    title: 'Article Title',
    createdOn: '',
    summary: '',
    imagePath: '',
    hero: false
  };

  render() {
    let title = this.props.title,
        createdOn = (() => {
          let createdOnObj = new XDate(this.props.createdOn), nowObj = new XDate(),
              isThisYear = createdOnObj.getFullYear() == nowObj.getFullYear(),
              format = `ddd, MMMM M${isThisYear ? '' : ', yyyy'}`;
          return createdOnObj.toString(format);
        })(),
        summary = this.props.summary,
        imagePath = this.props.imagePath,
        hero = this.props.hero;

    let imageStyles = [styles.image[hero ? 'hero' : 'normal']];

    imagePath && imageStyles.push({
      backgroundImage: `url('${imagePath}')`
    });

    return (
      <div to='' style={styles.articleTile}>
        <Link to=''>
          <div style={imageStyles} />
        </Link>
        <div style={styles.content[hero ? 'hero' : 'normal']}>
          <Link to=''>
            <h3 style={styles.title}>{title}</h3>
          </Link>
          <p style={styles.date}>{createdOn}</p>
          <p style={styles.summary}>{summary}</p>
        </div>
      </div>
    );
  }

}

const styles = styler`
  articleTile
    width: 100%
    height: 100%
    position: relative
    z-index: 0

  image
    width: 100%
    background-color: #4b74b5
    background-size: cover
    background-repeat: no-repeat
    background-position: center

    &normal
      height: 280px

    &hero
      position: absolute
      z-index: -1
      height: 100%

  title
    display: inline-block
    line-height: 33px
    transition: color 0.1s ease-in-out
    color: rgba(24,50,79,1)

    :hover
      color: rgba(7,176,193,1)

  content
    &normal
      padding: 24px

    &hero
      position: absolute
      max-width: 840px
      margin: 0 auto
      left: 0
      right: 0
      bottom: 48px
      padding: 36px 48px
      background: rgba(255,255,255,1)

  date
    font-size: 13px
    text-transform: uppercase
    letter-spacing: 1px
    opacity: 0.85

  summary
    margin: 24px 0 12px

`;
