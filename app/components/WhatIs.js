import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './WhatIs.css';

export default class WhatIs extends Component {
  render() {
    return (
      <div className={styles.container}>
          <Link to="/" className={styles.home}></Link>
          <Link to="/WhatIs/2" className={styles.powerAhead}></Link>
          <Link to="/ProductInfo" className={styles.productInformation}></Link>
          <Link to="/" className={styles.logo}></Link>
      </div>
    );
  }
}