const mongoose = require('mongoose')

const CandidatoSchema = new mongoose.Schema({
  name: {
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
  c: {
    type: Boolean,
    // default: false
  },
  js: {
    type: Boolean,
    // default: false
  },
  node: {
    type: Boolean,
    // default: false
  },
  php: {
    type: Boolean,
    // default: false
  },
  msg: {
    type: Boolean,
    // default: false
  },
  ionic: {
    type: Boolean,
    // default: false
  },
  angular: {
    type: Boolean,
    default: false
  },
  react: {
    type: Boolean,
    // default: false
  },
  laravel: {
    type: Boolean,
    // default: false
  },
  created_at:{
    type:Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Candidato', CandidatoSchema)