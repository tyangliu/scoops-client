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
    summary: ''
  };

  render() {
    let title = this.props.title,
        createdOn = (() => {
          let createdOnObj = new XDate(this.props.createdOn), nowObj = new XDate(),
              isThisYear = createdOnObj.getFullYear() == nowObj.getFullYear(),
              format = `ddd, MMMM M${isThisYear ? '' : ', yyyy'}`;
          return (createdOnObj).toString(format);
        })(),
        summary = this.props.summary;

    return (
      <div style={styles.articleTile}>
        <div style={styles.thumbnail}></div>
        <div style={styles.content}>
          <Link to=''><h3>{title}</h3></Link>
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

  thumbnail
    width: 100%
    height: 280px
    background: #4b74b5

  content
    padding: 24px

  date
    font-size: 14px
    text-transform: uppercase
    letter-spacing: 1px
    opacity: 0.85

  summary
    margin: 24px 0 36px

`;
