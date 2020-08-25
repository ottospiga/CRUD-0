const express = require('express')
const Candidato = require('../models/Candidato')
const router = express.Router()
// const { ensureAuthenticated } = require('../config/auth')


router.get('/',(req,res)=>{
  Candidato.find({},(err,data)=>{
    res.json(data)
  })
})

router.get('/:id',(req,res)=>{
  Candidato.findById(req.params.id,(err, data)=>{
    res.json(data)
  })
})

router.delete('/:id', async(req,res) =>{
  await Candidato.findByIdAndDelete(req.params.id)
  res.json({'message':'deleted'})
})

router.post('/', (req,res)=>{
  candidato = new Candidato({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    idade:req.body.idade,
    link:req.body.link,
    tec:req.body.tec
  })
  candidato.save(()=>{
    res.json(candidato)
  })
})

router.put('/:id', async(req,res)=>{
  await Candidato.findByIdAndUpdate(req.params.id, req.body)
  res.json({'message': 'updated'})
})

module.exports = router
