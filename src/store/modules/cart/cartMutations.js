export default {
  SET_CART_DATA(state, cartItems) {
    state.cartItems = cartItems;
  },

  ADD_CART_ITEM(state, cartItem) {
    const exitedCartItem = state.cartItems.find(item => item._id === cartItem._id)
    if (exitedCartItem) {
      exitedCartItem.quantity = cartItem.quantity;
    } else {
      state.cartItems.push(cartItem);
    }
  }
}
