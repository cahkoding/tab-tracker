import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  store (request) {
    return Api().post('songs', request)
  },
  show (songId) {
    return Api().get(`song/${songId}`)
  },
  put (request, songId) {
    return Api().put(`song/${songId}`, request)
  }
}
