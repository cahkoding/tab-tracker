const { Song } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const search = (req.query.search)
        ? req.query.search : ''

      const songs = await Song.findAll({
        limit: 10,
        where: {
          $or: [
            'title', 'artist', 'album', 'genre'
          ].map(key => ({
            [key]: {
              $like: `%${search}%`
            }
          }))
        }
      })
      res.send(songs)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'error while fething data songs APIs'
      })
    }
  },
  async store (req, res) {
    try {
      const songs = await Song.create(req.body)
      res.send(songs)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'error while insert data songs APIs'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'error while fething data songs APIs'
      })
    }
  },
  async put (req, res) {
    try {
      const song = await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(song)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'error occured server while trying update'
      })
    }
  }
}
