const mongoose = require('mongoose')

const Candidato = new mongoose.Schema({
  nome: {
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

module.exports = mongoose.model('Candidato', Candidato)