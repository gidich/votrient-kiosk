import React, { Component } from 'react';
import Timeout from '../components/Timeout';


export default class WhichPage extends Component {
  render() {
    return (
      <Timeout>
      {this.props.children}
      </Timeout>
    );
  }
}
