'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import styler from 'react-styling';

@Radium
export default class SectionLink extends Component {

  static defaultProps = {
    inverted: true,
    content: 'Link Text',
    to: ''
  };

  scrollToTop() { window && window.scrollTo(0, 0); }

  render() {
    let inverted = this.props.inverted,
        content  = this.props.children || this.props.content;

    return (
      <div style={styles.linkContainer}>
        <Link to={this.props.to}
              style={styles.sectionLink[inverted ? 'inverted' : 'normal']}
              onClick={this.scrollToTop}>
          <span style={styles.sectionLinkText}>
            {content}
          </span>
          <i className='material-icons' style={styles.sectionLinkArrow}>
            chevron_right
          </i>
        </Link>
      </div>
    );
  }

}

const styles = styler`
  linkContainer
    display: block
    text-align: center
    margin-bottom: 36px
    padding: 14px 0

  sectionLink
    display: inline-block
    padding: 7px 0

    &normal
      color: rgba(7,176,193,1)
      border-bottom: 2px solid rgba(7,176,193,1)

    &inverted
      color: rgba(255,255,255,1)
      border-bottom: 2px solid rgba(255,255,255,1)

  sectionLinkText
    display: inline-block
    line-height: 36px
    vertical-align: middle

  sectionLinkArrow
    display: inline-block
    font-size: 36px
    line-height: 36px
    vertical-align: middle
    margin-right: -4px
`;
