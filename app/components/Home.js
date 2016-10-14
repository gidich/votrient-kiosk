import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import ReactDriveIn from 'react-drive-in';
import SwipeableViews from 'react-swipeable-views';


export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>

        <div className={styles.headerAngle}><div>&nbsp;</div><div>In the first-line treatment of advanced RCC</div></div>

        <div>
          <div className={styles.navigationContainer}>
            <div className={styles.contentWedge}></div>
            <div className={styles.navigationLink}><Link to="/WhyStart"><div><strong>Why</strong> start with a VEGFR Inhibitor?</div></Link></div><br/>
            <div className={styles.navigationLink}><Link to="/WhoIs"><div><strong>Who</strong> is the appropriate patient for fotrient?</div></Link></div><br/>
            <div className={styles.navigationLink}><Link to="/WhatIs"><div><strong>What</strong> is the PFS benefit of Votrient First-Line?</div></Link></div><br/>
            <div className={styles.navigationLink}><Link to="/HowDoes"><div><strong>How</strong> does votrient compare with Sunitinib First-Line?</div></Link></div><br/>
            <div className={styles.navigationLink}><Link to="/Which"><div><strong>Which</strong> First-Line treatment do patients prefer?</div></Link></div><br/>
            <div className={styles.navigationLink}><Link to="/Why"><div><strong>Why</strong> Votrient?</div></Link></div><br/>
          </div>
        </div>
        <Link to="/ProductInfo" className={styles.productInformation}></Link>
      </div>
    );
  }
}
