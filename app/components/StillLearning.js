import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './StillLearning.css';

export default class StillLearning extends Component {
static propTypes = {
    stayOnPage: PropTypes.func.isRequired
  };

  render() {
      const { stayOnPage } = this.props;
    return (
      <div className={styles.container}>
          <Link to="/" className={styles.home}></Link>
          <div className={styles.yes} onClick={stayOnPage}></div>
      </div>
    );
  }
}