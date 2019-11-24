export default {
  products: state => state.cartItems.map(cartItem => cartItem.product)
}
