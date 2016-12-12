import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Which.css';

export default class Which extends Component {
  render() {
    return (
      <div className={styles.container}>
          <Link to="/" className={styles.home}></Link>
          <Link to="/Which/2" className={styles.powerAhead}><div /></Link>
          <Link to="/ProductInfo" className={styles.productInformation}></Link>
          <Link to="/" className={styles.logo}></Link>
          <Link to="/Which/References" className={styles.references}></Link>
          <Link to="/Which/Diagram" className={styles.diagram}></Link>      
      </div>
    );
  }
}