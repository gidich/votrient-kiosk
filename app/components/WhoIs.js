import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './WhoIs.css';

export default class WhoIs extends Component {
  render() {
    return (
      <div className={styles.container}>
          <Link to="/" className={styles.home}></Link>
          <Link to="/ThankYou" className={styles.powerAhead}></Link>
          <Link to="/ProductInfo" className={styles.productInformation}></Link>
      </div>
    );
  }
}