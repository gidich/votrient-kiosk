import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import styles from './WhatIs2Diagram.css';

export default class WhatIs2Diagram extends Component {
  render() {
    return (
      <div className={styles.container}>
          <div className={styles.close} onClick={browserHistory.goBack} />
      </div>
    );
  }
}
