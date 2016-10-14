import React, { Component } from 'react';
import HowDoes from '../components/HowDoes';

export default class HowDoesPage extends Component {
  render() {
    return (
      <div>
      {this.props.children}
      </div>
    );
  }
}
