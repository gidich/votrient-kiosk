import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './WhyStart.css';

export default class WhyStart extends Component {
  render() {
    return (
      <div className={styles.container}>
          <Link to="/" className={styles.home}></Link>
          <Link to="/ThankYou" className={styles.powerAhead}><div /></Link>
          <Link to="/ProductInfo" className={styles.productInformation}></Link>
          <Link to="/" className={styles.logo}></Link>
          <Link to="/WhyStart/References" className={styles.references}></Link>
          <Link to="/WhyStart/Diagram" className={styles.diagram}></Link>     
     </div>
    );
  }
}