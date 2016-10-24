import React, { Component } from 'react';
import ThankYou from '../components/ThankYou';
import Timeout from '../components/Timeout';


export default class ThankYouPage extends Component {
  render() {
    return (
      <Timeout>
      <ThankYou />
      </Timeout>
    );
  }
}
