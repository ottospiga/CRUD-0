const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs')

const Recrutador = require('../models/Recrutador')

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      Recrutador.findOne({
        email: email
      }).then(recrutador => {
        if (!recrutador) {
          return done(null, false, { message: 'Email ou senha incorretos' })
        }

        // Match password
        bcrypt.compare(password, recrutador.password, (err, isMatch) => {
          if (err) throw err
          if (isMatch) {
            return done(null, recrutador)
          } else {
            return done(null, false, { message: 'Email ou senha incorretos' })
          }
        })
      })
    })
  )


  passport.serializeUser(function(recrutador, done) {
    done(null, recrutador.id)
  })

  passport.deserializeUser(function(id, done) {
    Recrutador.findById(id, function(err, recrutador) {
      done(err, recrutador)
    })
  })
} 