import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Which.css';

export default class Which extends Component {
  render() {
    return (
      <div className={styles.container}>
          <Link to="/" className={styles.home}></Link>
          <Link to="/Which/2" className={styles.powerAhead}></Link>
          <Link to="/ProductInfo" className={styles.productInformation}></Link>
      </div>
    );
  }
}