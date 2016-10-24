import React, { Component } from 'react';
import WhoIs from '../components/WhoIs';
import Timeout from '../components/Timeout';


export default class WhoIsPage extends Component {
  render() {
    return (
      <Timeout>
      <WhoIs />
      </Timeout>
    );
  }
}
