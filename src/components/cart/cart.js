import * as React from 'react';
import { useStyles } from './styles'
import OrderSummary from './orderSummary/orderSummary';
import ProductsAddedToCart from './productsAddedToCart/productsAddedToCart';

export default function Cart() {
  const classes = useStyles();
  return (
    <>
      <OrderSummary></OrderSummary>
      <ProductsAddedToCart></ProductsAddedToCart>
    </>
  );
}