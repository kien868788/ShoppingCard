import BaseService from "./base.service";

class CartItemsService extends BaseService {
  get entity() {
    return 'cart-items'
  }

  getAll() {
    return new Promise((resolve, reject) => {
      return this.request({ auth: true }).get(`${this.entity}`)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }
}

export default new CartItemsService();
