import BaseService from './base.service'

class ProductService extends BaseService {
  get entity() {
    return 'product'
  }

  getAll() {
    return new Promise((resolve, reject) => {
      return this.request().get(`${this.entity}`)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }

}

export default new ProductService();
