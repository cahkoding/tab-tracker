const passport = require('passport')

module.exports = function (req, res, next) {
  passport.authenticate('jwt', function (err, user) {
    if (err || !user) {
      res.status(403).send({
        error: 'you dont have access to this resource'
      })
    } else {
      // console.log('=================')
      // console.log(user)
      req.user = user
      next()
    }
  })(req, res, next)
}
