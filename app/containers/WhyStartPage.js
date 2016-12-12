import React, { Component } from 'react';
import Timeout from '../components/Timeout';


export default class WhyStartPage extends Component {
  render() {
    return (
      <Timeout>
       {this.props.children}
      </Timeout>     
    );
  }
}
