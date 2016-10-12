import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Moa.css';
import ReactDriveIn from 'react-drive-in';
import SwipeableViews from 'react-swipeable-views';

export default class Moa extends Component {
  render() {
    return (
      <div>
        <div className={styles.backButton}>
            <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
            </Link>
        </div>


        <SwipeableViews>
            <div className={styles.slide + ' ' + styles.slide1}>    
            slide n°1 (slide to left to advance)
            </div>
            <div className={styles.slide + ' ' + styles.slide2}>
            slide n°2
            </div>
            <div className={styles.slide + ' ' + styles.slide3}>
            slide n°3 (you are done.. got to home page by clicking arrrow at top)
            </div>
        </SwipeableViews>
      </div>
    );
  }
}
