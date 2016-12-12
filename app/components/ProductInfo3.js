import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './ProductInfo3.css';

export default class ProductInfo3 extends Component {
  render() {
    return (
      <div className={styles.container}>
          <Link to="/" className={styles.home}></Link>
          <Link to="/" className={styles.logo}></Link>
          <Link to="/ProductInfo/References" className={styles.references}></Link>
          <Link to="/ProductInfo/2" className={styles.back}></Link>
          <Link to="/ThankYou" className={styles.powerAhead}><div /></Link>
      </div>
    );
  }
}