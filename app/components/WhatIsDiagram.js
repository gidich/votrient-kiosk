import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import styles from './WhatIsDiagram.css';

export default class WhatIsDiagram extends Component {
  render() {
    return (
      <div className={styles.container}>
          <div className={styles.close} onClick={browserHistory.goBack} />
      </div>
    );
  }
}
