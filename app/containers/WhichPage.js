import React, { Component } from 'react';
import Which from '../components/Which';
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
