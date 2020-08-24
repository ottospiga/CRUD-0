const mongoose = require('mongoose')

const PopSchema = new mongoose.Schema({
  Nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  idade: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  tec: {
    type: Array,
    "default": [],
    required: true
  },
  created_at:{
    type:Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Pop', PopSchema)