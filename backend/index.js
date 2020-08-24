const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://amora:amoraVoadora@cluster0.raig6.mongodb.net/<dbname>?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/api',require('./routes/recrutador'))

const port = process.env.PORT | 80

app.listen(port)