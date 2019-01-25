const { History, Song } = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const { userId } = req.query
      const histories = await History.findAll({
        where: {
          userId: userId
        },
        include: [{
          model: Song
        }],
        order: [
          ['id', 'DESC']
        ]
      }).map(history => history.toJSON())
        .map(history => _.extend(
          {},
          history.Song,
          history
        ))

      res.send(_.uniqBy(histories, history => history.SongId))
    } catch (err) {
      res.status(500).send({
        error: err
      })
    }
  },

  async store (req, res) {
    try {
      const histories = await History.create(req.body)
      res.send({
        data: histories || null
      })
    } catch (err) {
      res.status(500).send({
        error: 'error histories api'
      })
    }
  }
}
