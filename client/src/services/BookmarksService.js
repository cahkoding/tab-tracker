import Api from './Api'

export default {
  index ({songId, userId}) {
    return Api().get('/bookmarks', {
      params: {
        songId: songId,
        userId: userId
      }
    })
  },

  store (request) {
    return Api().post('/bookmarks', request)
  },

  destroy (bookmarksId) {
    return Api().delete(`/bookmarks/${bookmarksId}`)
  },

  bookmarkedSongs (userId) {
    return Api().get('/bookmarks/song', {
      params: {
        userId: userId
      }
    })
  }
}
