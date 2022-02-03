import { productState } from "../state/productInfoState";

const initialState = productState;

export function productReducer(state = initialState, action) {

  const product = state.find(p => action.payload === p.productId);
  const products = state.filter(p => action.payload !== p.productId);

  switch (action.type) {

    //add selected product to cart
    case 'ADD_TO_CART':
      return [
        ...products,
        {
          ...product,
          isSelected: true,
          quantity: product.quantity + 1
        }
      ];
    //remove product from cart
    case 'REMOVE_FROM_CART':
      return [
        ...products,
        {
          ...product,
          isSelected: false,
          quantity: 0
        }
      ];
    //delete all items from cart
    case 'EMPTY_CART':
      return state.map(p => {
        return {
          ...p,
          isSelected: false,
          quantity: 0
        }
      })
    //increment quantity by 1
    case 'INCREMENT_ITEM':
      return state.map((p) => {
        if (p.productId == product.productId)
          return {
            ...product,
            quantity: product.quantity + 1
          }
          else
          return p
      });
    //decrement quantity by 1
    case 'DECREMENT_ITEM':
      return state.map((p) => {
        if (p.productId == product.productId)
          return {
            ...product,
            quantity: product.quantity - 1,
            isSelected: (product.quantity === 1) ? false : true
          }
        else
        return p
      });

    default:
      return state;
  }
}






