import React, { Component } from 'react';
import Timeout from '../components/Timeout';


export default class WhatIsPage extends Component {
  render() {
    return (
      <Timeout>
      {this.props.children}
      </Timeout>
    );
  }
}
