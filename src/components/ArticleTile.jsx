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

  state = { hovered: false };

  hover = () => this.setState({hovered: true});
  unhover = () => this.setState({hovered: false});

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
        hero = this.props.hero,
        hovered = this.state.hovered;

    let imageStyles = [styles.image[hero ? 'hero' : 'normal']];

    imagePath && imageStyles.push({
      backgroundImage: `url('${imagePath}')`
    });

    return (
      <Link to=''
            style={styles.articleTile}
            onMouseOver={this.hover}
            onMouseOut={this.unhover}>
        <div style={imageStyles} />
        <div style={styles.content[hero ? 'hero' : 'normal']}>
          <h3 style={styles.title[hovered ? 'hovered' : 'normal']}>
            {title}
          </h3>
          <p style={styles.date}>{createdOn}</p>
          <p style={styles.summary}>{summary}</p>
        </div>
      </Link>
    );
  }

}

const styles = styler`
  articleTile
    width: 100%
    height: 100%
    position: relative
    z-index: 0
    display: block
    color: rgba(24,50,79,1)
    font-weight: normal

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
    color: rgba(24,50,79,1)
    transition: color 0.15s ease-in-out

    &normal

    &hovered
      color: rgba(75,116,181,1)

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
