import React, { Component } from 'react';
import WhatIs from '../components/WhatIs';
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
