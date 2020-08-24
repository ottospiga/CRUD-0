const express = require('express')
const Recrutador = require('../models/Recrutador')
const router = express.Router()

router.get('/', (req,res) => {
  Recrutador.find({}, (err,data)=>{
    res.json(data)
  })
})

router.get('/:id', (req,res)=>{
  Recrutador.findById(req.params.id,(err, data)=>{
    res.json(data)
  })
})

router.delete('/:id', async(req,res) =>{
  await Recrutador.findByIdAndDelete(req.params.id)
  res.json({'message':'deleted'})
})

router.post('/', (req,res)=>{
  recrutador = new Recrutador({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
  })
  recrutador.save(()=>{
    res.json(recrutador)
  })
})

router.put('/:id', async(req,res)=>{
  await Recrutador.findByIdAndUpdate(req.params.id, req.body)
  res.json({'message': 'updated'})
})

module.exports = router