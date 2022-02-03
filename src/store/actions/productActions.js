export function actionAddToCart(id) {
    return {
      type: 'ADD_TO_CART',
      payload:id
    }
  }
  export function actionRemoveFromCart(id){
    return {
      type: 'REMOVE_FROM_CART',
      payload:id
    }
  }
  export function actionEmptyCart(){
    return {
      type: 'EMPTY_CART',
    }
  }
  export function actionIncrementItem(id){
    return {
      type: 'INCREMENT_ITEM',
      payload:id
    }
  }
  export function actiondecrementItem(id){
    return {
      type: 'DECREMENT_ITEM',
      payload:id
    }
  }