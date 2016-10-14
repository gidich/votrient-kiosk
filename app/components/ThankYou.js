import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './ThankYou.css';

export default class ThankYou extends Component {
  render() {
    return (
      <div className={styles.container}>
          <Link to="/" className={styles.home}></Link>
          <Link to="/ProductInfo" className={styles.productInformation}></Link>
      </div>
    );
  }
}