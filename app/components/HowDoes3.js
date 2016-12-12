import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './HowDoes3.css';

export default class HowDoes3 extends Component {
  render() {
    return (
      <div className={styles.container}>
          <Link to="/" className={styles.home}></Link>
          <Link to="/HowDoes/2" className={styles.back}></Link>
          <Link to="/HowDoes/4" className={styles.powerAhead}><div /></Link>
          <Link to="/ProductInfo" className={styles.productInformation}></Link>
          <Link to="/" className={styles.logo}></Link>
          <Link to="/HowDoes/References" className={styles.references}></Link>
          <Link to="/HowDoes/3Diagram" className={styles.diagram}></Link>      
      </div>
    );
  }
}