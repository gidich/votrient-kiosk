import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import styles from './WhatIsSafetyDiagram.css';

export default class WhatIsSafetyDiagram extends Component {
  render() {
    return (
      <div className={styles.container}>
          <div className={styles.close} onClick={browserHistory.goBack} />
      </div>
    );
  }
}
