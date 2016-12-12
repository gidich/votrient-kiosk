import React, { Component } from 'react';
import Timeout from '../components/Timeout';


export default class WhoIsPage extends Component {
  render() {
    return (
      <Timeout>
      {this.props.children}
      </Timeout>
    );
  }
}
