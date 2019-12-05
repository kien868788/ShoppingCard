import cartItemsService from '@/services/cart-items.service'

export default {
  getCartData ({ commit }) {
    return cartItemsService.getAll()
      .then(response => commit('SET_CART_DATA', response.data))
      .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
  },

  addCard({ commit }, { id , quantity }) {
    return cartItemsService.create({ productId: id, quantity })
      .then(response => commit('ADD_CART_ITEM', response.data))
      .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
  },

  async removeCart({ commit, dispatch }, cartId) {
    try {
      await cartItemsService.remove(cartId);
      await dispatch('getCartData')
    } catch (error) {
      commit('toast/NEW', { type: 'error', message: error.message }, { root: true });
    }
  }
}
