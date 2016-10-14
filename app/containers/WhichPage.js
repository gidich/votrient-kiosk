import React, { Component } from 'react';
import Which from '../components/Which';

export default class WhichPage extends Component {
  render() {
    return (
      <div>
      {this.props.children}
      </div>
    );
  }
}
