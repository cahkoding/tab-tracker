import Api from './Api'

export default {
  index ({songId, userId}) {
    return Api().get('/recentlyViewedSongs', {
      params: {
        songId: songId,
        userId: userId
      }
    })
  },

  store (request) {
    return Api().post('/recentlyViewedSongs', request)
  }
}
