import BaseService from './base.service'

class UsersService extends BaseService {
  get entity () {
    return 'users'
  }
}

export default new UsersService()
