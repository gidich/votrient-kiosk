import React, { Component } from 'react';
import Timeout from '../components/Timeout';


export default class WhatIsSafetyPage extends Component {
  render() {
    return (
      <Timeout>
      {this.props.children}
      </Timeout>
    );
  }
}
