import React, { Component } from 'react';
import WhatIs from '../components/WhatIs';

export default class WhatIsPage extends Component {
  render() {
    return (
      <div>
      {this.props.children}
      </div>
    );
  }
}
