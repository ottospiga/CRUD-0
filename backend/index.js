const express = require('express')
const mongoose = require('mongoose')
//DB Config
// const mdb = require('./config/keys').MongoURI

mongoose.connect('mongodb+srv://otto:oyyo@cluster0.mwn4f.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology: true})
    .then(()=> console.log('mongodb connected'))
    .catch( err => console.log(err))

// //Passport Middleware
// app.use(passport.initialize())
// app.use(passport.session())

const cors = require('cors')
// const session = require('express-session')
// const passport = require('passport')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// //Express Session
// app.use(session({
//   secret:'supersecret',
//   resave:true,
//   saveUninitialized:true,
// }))

// //Passport Config
// require('./config/passport')(passport)



app.use('/api',require('./routes/index'))

const PORT = process.env.PORT | 80
//app.listen(PORT, console.log(`Server started on port ${PORT}`))
app.listen(PORT)