const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const cors = require('cors')

const app = express()

//Passport Config
require('./config/passport')(passport)

//DB Config
const mdb = require('./config/keys').MongoURI

mongoose.connect(mdb,{useNewUrlParser:true, useUnifiedTopology: true})
    .then(()=> console.log('mongodb connected'))
    .catch( err => console.log(err))


//Express Session
app.use(session({
  secret:'supersecret',
  resave:true,
  saveUninitialized:true,
}))

//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())

//Routes
app.use('/api',require('./routes/index'))
app.use('/recrutador', require('./routes/recrutador'))

const PORT = process.env.PORT | 80
//app.listen(PORT, console.log(`Server started on port ${PORT}`))
app.listen(PORT)