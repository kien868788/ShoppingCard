export default {
  SET_CART_DATA(state, cartItems) {
    state.cartItems = cartItems;
  },

  ADD_CART_ITEM(state, cartItem) {
    state.cartItems.push(cartItem);
  }
}
