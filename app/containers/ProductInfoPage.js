import React, { Component } from 'react';
import ProductInfo from '../components/ProductInfo';
import Timeout from '../components/Timeout';


export default class ProductInfoPage extends Component {
  render() {
    return (
      <Timeout>
      <ProductInfo />
      </Timeout>
    );
  }
}
