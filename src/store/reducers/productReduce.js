import { productSate } from '../state/productInfoState'

let initialState = {
  productSate: productSate
}

export function productReducer(state = initialState, action) {
  state = JSON.parse(JSON.stringify(state));
  if (action.type == 'Dummy')
      state = action.payload;
  return state;
}




