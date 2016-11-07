import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './HowDoes4.css';

export default class HowDoes extends Component {
  render() {
    return (
      <div className={styles.container}>
          <Link to="/" className={styles.home}></Link>
          <Link to="/HowDoes/3" className={styles.back}></Link>
          <Link to="/ThankYou" className={styles.powerAhead}></Link>
          <Link to="/ProductInfo" className={styles.productInformation}></Link>
          <Link to="/" className={styles.logo}></Link>
      </div>
    );
  }
}