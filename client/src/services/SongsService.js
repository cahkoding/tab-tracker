import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  store (request) {
    return Api().post('songs', request)
  }
}
