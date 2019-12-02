import BaseService from './base.service'

class UsersService extends BaseService {
  get entity () {
    return 'users'
  }

  isExisted(data = window.required()) {
    return new Promise((resolve, reject) => {
      return this.request().post(`${this.entity}/is-existed`, data)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }

  getCurrent() {
    return new Promise((resolve, reject) => {
      return this.request({ auth : true }).get(`${this.entity}/getCurrent`)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }

  update(data) {
    return new Promise((resolve, reject) => {
      return this.request({ auth : true }).put(`${this.entity}`, data)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }

  removeShippingAddress(data) {
    return new Promise((resolve, reject) => {
      return this.request({ auth : true }).put(`${this.entity}/remove-shipping-address`, data)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }

  addShippingAddress(data) {
    return new Promise((resolve, reject) => {
      return this.request({ auth : true }).put(`${this.entity}/add-shipping-address`, data)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }

  updatePassword(data) {
    return new Promise((resolve, reject) => {
      return this.request({ auth : true }).put(`${this.entity}/update-password`, data)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }

  getAllEditors() {
    return new Promise((resolve, reject) => {
      return this.request({ auth : true }).get(`${this.entity}/editors`)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }

  createEditor(data) {
    return new Promise((resolve, reject) => {
      return this.request({ auth : true }).post(`${this.entity}/editors`, data)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }
}

export default new UsersService()
