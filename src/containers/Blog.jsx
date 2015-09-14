'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import DocumentTitle from 'react-document-title';
import styler from 'react-styling';
import { PageHeading, IconHeading, HArticleList } from '../components';

@Radium
export default class Blog extends Component {

  state = {
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
      },
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
    this.props.setInvertedNav(false);
    this.props.setBackgroundColor('rgba(255,255,255,1)');
  }

  render() {
    return (
      <div>
        <DocumentTitle title='Blog - SCOOPS'/>
        <PageHeading inverted={false}>Blog</PageHeading>
        <HArticleList articles={this.state.articles} />
      </div>
    );
  }

}

const styles = styler`
`;
