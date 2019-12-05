export default {
  isAdmin: state => state.currentUser.role === 1,
  isEditor: state => state.currentUser.role === 2,
  shippingAddress: state => state.currentUser.shippingAddresses,
  phoneNumber: state => state.currentUser.phoneNumber,
}
