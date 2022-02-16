import * as React from 'react';
import OrderSummary from './orderSummary/orderSummary';
import ProductsAddedToCart from './productsAddedToCart/productsAddedToCart';
import '../home/styles.css'

export default function Cart() {

  return (
    <div className='margin'>
      <OrderSummary></OrderSummary>
      <ProductsAddedToCart></ProductsAddedToCart>
    </div>
  );
}