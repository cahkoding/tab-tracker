const { Song } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
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
  async view (req, res) {
    try {
      const songs = await Song.findById(req.params.id)
      res.send(songs)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'error while fething data songs APIs'
      })
    }
  }
}
