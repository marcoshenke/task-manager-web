import {api} from 'services'

const get = () => {
  api.get('/users/identify')
}

export default {
  get
}