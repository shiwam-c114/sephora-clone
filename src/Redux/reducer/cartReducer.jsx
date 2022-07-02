function Cart(store = [], action) {
    switch (action.type) {
      case 'addToCart':
          return store.push(action.data)
        break;
      case 'removeFromCart':
          return store.pop()
        break;
    
      default:
        break;
    }
    
  }

  export default Cart