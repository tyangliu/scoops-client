'use strict';

import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import styler from 'react-styling';

@Radium
export default class SectionLink extends Component {

  static defaultProps = {
    inverted: true,
    underlined: false,
    content: 'Link Text',
    to: ''
  };

  render() {
    let inverted = this.props.inverted,
        content  = this.props.children || this.props.content;

    return (
      <div style={styles.linkContainer}>
        <Link to={this.props.to} style={inverted ? styles.sectionLink.inverted : styles.sectionLink}>
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
    padding: 14px 0
    margin-bottom: 36px

  sectionLink
    &inverted
      color: rgba(255,255,255,1)

  sectionLinkText
    display: inline-block
    line-height: 36px
    vertical-align: middle

  sectionLinkArrow
    display: inline-block
    font-size: 36px
    line-height: 36px
    vertical-align: middle
`;
