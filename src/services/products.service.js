import BaseService from './base.service'

class ProductService extends BaseService {
  get entity() {
    return 'product'
  }

  getAll({limit = 12, page = 1}) {
    return new Promise((resolve, reject) => {
      return this.request().get(`${this.entity}?limit=${limit}&page=${page}`)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }

  getTopProducts(params) {
    return new Promise((resolve, reject) => {
      return this.request().get(`${this.entity}/top?page=${params.page}`)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }

  getSearchProducts(params) {
    return new Promise((resolve, reject) => {
      return this.request().get(`${this.entity}/search?keyword=${params.keyword}&page=${params.page}`)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }

  getNewProducts(params) {
    return new Promise((resolve, reject) => {
      return this.request().get(`${this.entity}/new?page=${params.page}`)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }

  getProductsByCategory(categoryId, params) {
    return new Promise((resolve, reject) => {
      return this.request().get(`${this.entity}/category/${categoryId}`, params)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }
}

export default new ProductService();
