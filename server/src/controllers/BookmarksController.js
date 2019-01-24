const { Bookmark, Song } = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const { songId, userId } = req.query
      const where = {
        userId: userId
      }

      if (songId) {
        where.songId = songId
      }
      const bookmarks = await Bookmark.findAll({
        where: where,
        include: [{
          model: Song
        }],
        order: [
          ['id', 'DESC']
        ]
      }).map(bookmark => bookmark.toJSON())
        // .map(bookmark => _.extend({
        //   bookmarkId: bookmark.id
        // }, bookmark.Song))
        .map(bookmark => _.extend(
          {},
          bookmark.Song,
          bookmark
        ))
        // meaning what?
        // param pertama TARGET, next param dianggap source
        // setiap next source akan mereplace value yg nama propertinya udah ada
        // properti yang belum ada akan di insertkan
        // alur script diatas:
        // {} -> object targat
        // bookmar.Song -> cth: ada id: idnya lagu
        // bookmark -> id: idnya bookmark akan mereplace value id lagu
        // intinya setiap source akan reassign source sebelumnya

      res.send(bookmarks)
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

  // gakjadi dipake
  async bookmarkedSongs (req, res) {
    try {
      const { userId } = req.query
      const bookmarkedSongs = await Bookmark.findAll({
        where: {
          UserId: userId
        },
        include: [{
          model: Song
        }]
      }).map(bookmarkedSong => bookmarkedSong.toJSON())
        .map(bookmarkedSong => _.extend({
          bookmarkId: bookmarkedSong.id
        }, bookmarkedSong.Song))
      res.send(bookmarkedSongs)
    } catch (err) {
      res.status(500).send({
        error: 'erro while trying hit bookmarkedsongApi!'
      })
    }
  }
}
