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

  getAllOrders(params) {
    return new Promise((resolve, reject) => {
      return this.request({ auth : true }).get(`${this.entity}`, params)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }

  acceptOrders(data) {
    return new Promise((resolve, reject) => {
      return this.request({ auth : true }).put(`${this.entity}`, data)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }
}

export default new OrderService();
