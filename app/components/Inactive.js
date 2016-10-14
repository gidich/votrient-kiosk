import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Inactive.css';

export default class Inactive extends Component {
  render() {
    return (
      <div className={styles.container}>
          <Link to="/" className={styles.home}></Link>
          <Link to="/ProductInfo" className={styles.productInformation}></Link>
      </div>
    );
  }
}