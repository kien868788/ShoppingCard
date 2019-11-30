import BaseService from './base.service'

class DashboardService extends BaseService {
  get entity() {
    return 'statistical'
  }

  getOverview() {
    return new Promise((resolve, reject) => {
      return this.request({ auth: true }).get(`${this.entity}/overview`)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }

  getLastedUsers() {
    return new Promise((resolve, reject) => {
      return this.request({ auth: true }).get(`${this.entity}/lasted-users`)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }

  getTopUsers() {
    return new Promise((resolve, reject) => {
      return this.request({ auth: true }).get(`${this.entity}/top-users`)
        .then(response => resolve(this.responseWrapper(response, response.data.data)))
        .catch(error => reject(this.errorWrapper(error)))
    })
  }
}

export default new DashboardService()
