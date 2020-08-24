const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs')

const Recrutador = require('../models/Recrutador')

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      Recrutador.findOne({
        email: email
      }).then(Recrutador => {
        if (!Recrutador) {
          return done(null, false, { message: 'Email ou senha incorretos' })
        }

        // Match password
        bcrypt.compare(password, Recrutador.password, (err, isMatch) => {
          if (err) throw err
          if (isMatch) {
            return done(null, Recrutador)
          } else {
            return done(null, false, { message: 'Email ou senha incorretos' })
          }
        })
      })
    })
  )


  passport.serializeUser(function(Recrutador, done) {
    done(null, Recrutador.id)
  })

  passport.deserializeUser(function(id, done) {
    Recrutador.findById(id, function(err, Recrutador) {
      done(err, Recrutador)
    })
  })
} 