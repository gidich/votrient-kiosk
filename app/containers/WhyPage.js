import React, { Component } from 'react';
import Timeout from '../components/Timeout';

export default class WhyPage extends Component {
  render() {
    return (
      <Timeout>
      {this.props.children}
      </Timeout>
    );
  }
}
