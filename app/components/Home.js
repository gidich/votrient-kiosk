import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import ReactDriveIn from 'react-drive-in';
import SwipeableViews from 'react-swipeable-views';


export default class Home extends Component {
  render() {
    return (
      <div>

<ReactDriveIn
          show="./assets/30265418mp4.mp4"
          poster="./assets/30265418mp4.jpg"/>


        <div className={styles.container}>
          <h2>Learn about Votrient</h2>
        <div><Link to="/moa">MOA</Link></div>
        <div>Patients</div>
        <div>Pivotal Trial</div>
        <div>Comparz</div>
        <div>Pisces</div>
        <div>Why Votrient</div>
        30265418mp4.mp45
        </div>
      </div>
    );
  }
}
