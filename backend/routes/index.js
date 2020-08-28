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
    idade:req.body.idade,
    link:req.body.link,
    c:req.body.c,
    js:req.body.c,
    node:req.body.node,
    php:req.body.php,
    msg:req.body.msg,
    ionic:req.body.ionic,
    angular:req.body.angular,
    react:req.body.react,
    laravel:req.body.laravel
  })
  candidato.save(()=>{
    res.json(candidato)
  })
})

router.post('/:id', async(req,res)=>{
  await Candidato.findByIdAndUpdate(req.params.id, req.body)
  res.json({'message': 'updated'})
})

module.exports = router
