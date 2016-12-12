import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './ProductInfo2.css';

export default class ProductInfo2 extends Component {
  render() {
    return (
      <div className={styles.container}>
          <Link to="/" className={styles.home}></Link>
          <Link to="/" className={styles.logo}></Link>
          <Link to="/ProductInfo/References" className={styles.references}></Link>
          <Link to="/ProductInfo" className={styles.back}></Link>
          <Link to="/ProductInfo/3" className={styles.powerAhead}><div /></Link>
      </div>
    );
  }
}