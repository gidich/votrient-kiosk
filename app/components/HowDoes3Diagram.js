import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import styles from './HowDoes3Diagram.css';

export default class HowDoes3Diagram extends Component {
  render() {
    return (
      <div className={styles.container}>
          <div className={styles.close} onClick={browserHistory.goBack} />
      </div>
    );
  }
}
