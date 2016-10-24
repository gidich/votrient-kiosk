import React, { Component } from 'react';
import Why from '../components/Why';
import Timeout from '../components/Timeout';

export default class WhyPage extends Component {
  render() {
    return (
      <Timeout>
       <Why/>
      </Timeout>
    );
  }
}
