import React, { Component } from 'react';
import Timeout from '../components/Timeout';


export default class HowDoesPage extends Component {
  render() {
    return (
      <Timeout>
      {this.props.children}
      </Timeout>
    );
  }
}
