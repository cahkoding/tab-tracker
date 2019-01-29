const AuthenticationController = require('./controllers/AuthenticationController')
const HistoriesController = require('./controllers/HistoriesController')
const BookmarksController = require('./controllers/BookmarksController')
const SongsController = require('./controllers/SongsController')

const isAuthenticated = require('./policies/isAuthenticated')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/songs',
    SongsController.index)

  app.post('/songs',
    SongsController.store)

  app.put('/song/:songId',
    SongsController.put)

  app.get('/song/:songId',
    SongsController.show)

  app.get('/bookmarks',
    isAuthenticated,
    BookmarksController.index)

  app.post('/bookmarks',
    BookmarksController.store)

  app.delete('/bookmarks/:bookmarkId',
    BookmarksController.destroy)

  // gajadi dipake
  app.get('/bookmarks/song',
    BookmarksController.bookmarkedSongs)

  app.get('/recentlyViewedSongs',
    HistoriesController.index)

  app.post('/recentlyViewedSongs',
    HistoriesController.store)
}
