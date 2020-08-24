const express = require('express')
const Candidato = require('../models/Candidato')
const router = express.Router()

router.get('/', (req, res) => res.render('welcome'))

router.get('/dashboard', (req,res) => {
  Candidato.find({}, (err,data)=>{
    res.json(data)
  })
})

router.get('/dashboard/:id', (req,res)=>{
  Candidato.findById(req.params.id,(err, data)=>{
    res.json(data)
  })
})

router.delete('/dashboard/:id', async(req,res) =>{
  await Candidato.findByIdAndDelete(req.params.id)
  res.json({'message':'deleted'})
})

router.post('/dashboard', (req,res)=>{
  Candidato = new Candidato({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
  })
  Candidato.save(()=>{
    res.json(candidato)
  })
})

router.put('/dashboard/:id', async(req,res)=>{
  await Candidato.findByIdAndUpdate(req.params.id, req.body)
  res.json({'message': 'updated'})
})

module.exports = router
