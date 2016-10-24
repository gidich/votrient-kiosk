import React, { Component } from 'react';
import WhyStart from '../components/WhyStart';
import Timeout from '../components/Timeout';


export default class WhyStartPage extends Component {
  render() {
    return (
      <Timeout>
       <WhyStart />
      </Timeout>     
    );
  }
}
