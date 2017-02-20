import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import ReactDriveIn from 'react-drive-in';
import SwipeableViews from 'react-swipeable-views';


export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <div className={styles.navigationContainer}>
            <div className={styles.contentWedge}></div>
            <div className={styles.navigationLink}><Link to="/WhyStart"><div><strong>Why</strong> start with a VEGFR Inhibitor? <img src="assets/images/forward-arrow.png"/></div></Link></div><br/>
            <div className={styles.navigationLink}><Link to="/WhoIs"><div><strong>Who</strong> is an appropriate patient for Votrient? <img src="assets/images/forward-arrow.png"/></div></Link></div><br/>
            <div className={styles.navigationLink}><Link to="/WhatIs"><div><strong>What</strong> is the PFS benefit of Votrient First-Line? <img src="assets/images/forward-arrow.png"/></div></Link></div><br/>
            <div className={styles.navigationLink}><Link to="/HowDoes"><div><strong>How</strong> does votrient compare with Sunitinib First-Line? <img src="assets/images/forward-arrow.png"/></div></Link></div><br/>
            <div className={styles.navigationLink}><Link to="/WhatIsSafety"><div><strong>What</strong> is the safety profile for Votrient? <img src="assets/images/forward-arrow.png"/></div></Link></div><br/>
            <div className={styles.navigationLink}><Link to="/Which"><div><strong>Which</strong> First-Line treatment do patients prefer? <img src="assets/images/forward-arrow.png"/></div></Link></div><br/>
            <div className={styles.navigationLink}><Link to="/Why"><div><strong>Why</strong> Votrient? <img src="assets/images/forward-arrow.png"/></div></Link></div><br/>
          </div>
        </div>
        <Link to="/ProductInfo" className={styles.productInformation}></Link>
      </div>
    );
  }
}
