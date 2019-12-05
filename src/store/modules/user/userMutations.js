export default {
  SET_CURRENT_USER (state, currentUserData) {
    state.currentUser = currentUserData
  },

  ADD_SHIPPING_ADDRESS(state, shippingAddress) {
    state.shippingAddresses = shippingAddress;
  }
}
