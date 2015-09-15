'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import styler from 'react-styling';
import _ from 'lodash';
import ArticleTile from './ArticleTile.jsx';

@Radium
export default class HArticleList extends Component {

  static defaultProps = {
    articles: []
  };

  render() {
    let articleTiles = _.chain(this.props.articles)
      .map((article,index) =>
        <div style={styles.articleTileContainer} key={'articleTile' + index}>
          <ArticleTile title={article.title}
                       createdOn={article.createdOn}
                       summary={article.summary} />
        </div>
      )
      .chunk(3)
      .map((articles, index) =>
        <div key={'articleChunk' + index}>
          {articles} <div style={styles.clearfix}></div>
        </div>)
      .value();

    return (
      <section style={styles.articleList}>
        {articleTiles}
      </section>
    );
  }

}

const styles = styler`
  articleList
    margin: 0 12px

  articleTileContainer
    width: 33.33%
    float: left
    padding: 0 12px

    @media (max-width: 960px)
      width: 100%
      display: block

  clearfix
    clear: both
    display: table
`;
