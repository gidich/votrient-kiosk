import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './WhatIsSafety.css';

export default class WhatIsSafety extends Component {
  render() {
    return (
      <div className={styles.container}>
          <Link to="/" className={styles.home}></Link>
          <Link to="/WhatIsSafety/2" className={styles.powerAhead}><div /></Link>
          <Link to="/ProductInfo" className={styles.productInformation}></Link>
          <Link to="/" className={styles.logo}></Link>
          <Link to="/WhatIsSafety/References" className={styles.references}></Link>
      </div>
    );
  }
}