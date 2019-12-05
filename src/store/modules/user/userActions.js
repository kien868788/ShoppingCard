import UsersService from '@/services/users.service'

export default {
  getCurrent ({ commit }) {
    return UsersService.getCurrent()
      .then(user => commit('SET_CURRENT_USER', user.data))
      .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
  },

  addShippingAddress({ commit }, shippingAddress) {
    return UsersService.addShippingAddress({ shippingAddress })
      .then(response => commit("ADD_SHIPPING_ADDRESS", response.data))
      .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
  }
}
