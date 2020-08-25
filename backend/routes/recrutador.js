const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const Recrutador = require('../models/Recrutador')
const passport = require('passport')
const { forwardAuthenticated } = require('../config/auth')

router.get('/login', forwardAuthenticated, (req, res) => res.render('login'))
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/api',
        failureRedirect: '/recrutador/login',
        failureFlash: true
    })(req, res, next)
})

router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success_msg', 'Você realizou logout')
    res.redirect('/recrutador/login')
})

router.get('/register', forwardAuthenticated, (req, res) => res.render('register'))

router.post('/register', (req, res) => {
    const { email, password, passwordConfirmation } = req.body
    let errors = []

    //Check required
    if (!email || !password || !passwordConfirmation) {
        errors.push({ msg: 'Por favor, preencha todos os campos.' })
    }

    //Check passwd match
    if (password !== passwordConfirmation) {
        errors.push({ msg: 'As senhas não conferem!' })
    }

    //Check pass length
    if (password.length < 6) {
        errors.push({ msg: 'Senha muito curta.' })
    }

    if (errors.length) {
        res.render('register', {
            errors,
            email,
            password,
            passwordConfirmation
        })
    } else {
      Recrutador.findOne({ email: email })
            .then(recrutador => {
                if (recrutador) {
                    //email already in use
                    errors.push({ msg: 'O email utilizado já está em uso' })
                    res.render('register', {
                        errors,
                        email,
                        password,
                        passwordConfirmation
                    })
                } else {
                    //registration
                    const newRecrutador = new Recrutador({
                        email,
                        password
                    })

                    //Hashing
                    bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newRecrutador.password, salt, (err, hash) => {
                        if (err) throw err;
                        newRecrutador.password = hash;
                        newRecrutador.save()
                            .then(hacker => {
                                req.flash('success_msg', 'Conta criada com sucesso! Faça login.')
                                res.redirect('/recrutador/login')
                            })
                            .catch(err => console.log(err))
                    }))
                }
            })
    }
})

const verifyPassword = (passwd1, passwd2, errors) => {
    //Check passwd match
    if (passwd1 !== passwd2 || passwd1.length != passwd2.length) {
        errors.push({ msg: 'Senhas não conferem!' })
    }

    //Check pass length
    if (passwd1.length < 6) {
        errors.push({ msg: 'Senha muito curta.' })
    }

}

router.post('/update', async (req, res) => {
    const { email, newPassword, passwordConfirmation } = req.body
    let recrutador = { email: email }
    let errors = []
    if (!email) error.push({ msg: 'o campo email não pode estar em branco' })
    if (newPassword || passwordConfirmation) {
        verifyPassword(newPassword, passwordConfirmation, errors)
    }
    if (errors.length) {
        res.render('settings', { errors, recrutador })
        return
    }

    recrutador = await Recrutador.findById(req.user.id)
    recrutador.email = email

    if (newPassword) {
        bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newPassword, salt, (err, hash) => {
            if (err) throw err;
            recrutador.password = hash;
            recrutador.save()
                .then(recrutador => {
                    req.flash('success_msg', 'Atualização bem sucedida!')
                    res.redirect('/dashboard')
                })
                .catch(err => console.log(err))
        }))
    }else{
      recrutador.save()
        .then(recrutador => {
            req.flash('success_msg', 'Atualização bem sucedida')
            res.redirect('/dashboard')
        })
        .catch(err => console.log(err))
    }
})

module.exports = router