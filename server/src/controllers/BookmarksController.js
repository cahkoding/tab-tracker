const { Bookmark, Song } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const { songId, userId } = req.query
      const bookmarks = await Bookmark.findOne({
        where: {
          songId: songId,
          userId: userId
        }
      })
      res.send({
        data: bookmarks
      })
    } catch (err) {
      res.status(500).send({
        error: 'error bookmarks API'
      })
    }
  },

  async store (req, res) {
    try {
      const { SongId, UserId } = req.body
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: SongId,
          userId: UserId
        }
      })

      if (bookmark) {
        res.status(403).send({
          error: 'Bookmark already exist'
        })
      } else {
        const newBookmark = await Bookmark.create(req.body)
        res.send({
          data: newBookmark || null
        })
      }
    } catch (err) {
      res.status(500).send({
        error: 'error bookmarks api'
      })
    }
  },

  async destroy (req, res) {
    try {
      const { bookmarkId } = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send({
        data: null
      })
    } catch (err) {
      res.status(500).send({
        error: 'error while trying delete Api'
      })
    }
  },

  async bookmarkedSongs (req, res) {
    try {
      const { userId } = req.query
      const bookmarkedSongs = await Bookmark.findAll({
        attributes: [
          'Song.id'
        ],
        where: {
          UserId: userId
        },
        include: [{
          model: Song
        }]
      })
      res.send(bookmarkedSongs)
    } catch (err) {
      res.status(500).send({
        error: 'erro while trying hit bookmarkedsongApi!'
      })
    }
  }
}
