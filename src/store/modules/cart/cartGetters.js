export default {
  cartItems : state => state.cartItems.filter(Boolean),
  numberOfProduct: state => state.cartItems.length,
}
