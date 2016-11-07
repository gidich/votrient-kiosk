import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './ProductInfo.css';

export default class ProductInfo extends Component {
  render() {
    return (
      <div className={styles.container}>
          <Link to="/" className={styles.home}></Link>
          <Link to="/" className={styles.logo}></Link>
      </div>
    );
  }
}