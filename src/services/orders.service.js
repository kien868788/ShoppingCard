import BaseService from './base.service'

class OrderService extends BaseService {
  get entity() {
    return 'orders'
  }

  getMyOrders() {
    return new Promise((resolve, reject) => {
      return this.request({ auth : true }).get(`${this.entity}/my-orders`)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }

}

export default new OrderService();
