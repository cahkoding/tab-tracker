import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
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
