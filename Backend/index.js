const express = require('express')
var cors = require('cors')
const mongoose = require('mongoose');
const { json } = require('body-parser')
const app = express()
const port = 3000

app.use(express.js())
app.use(cors())

const productSchema = new mongoose.Schema({
  name: String
  
});

const Product = mongoose.model('Product_imt', productSchema);

app.get('/', async(req, res) => {
  res.send(data)
})


app.get('/:id', async(req, res) => {
  let{id} = req.params
  const data = await Product.find(id)
  res.send('data')
})

app.post('/', async(req, res) => {
  const data = await Product.create(req.body)

  res.send('Got a POST request')
})

app.put('/:id', async(req, res) => {
  let{id} = req.params
  const data = await Product.findByIdAndUpdate(id,req.body)
  res.send(data)
})

app.delete('/:id', async(req, res) => {
  let{id} = req.params
  const data = await Product.findByIdAndDelete(id)
  res.send(data)
})

app.listen(port, () => {
mongoose.connect('mongodb+srv://nigarkgbp109:nigar111@shop111.m9k6a.mongodb.net/')
.then(() => console.log("Db connected")) 
.catch((err)=> console.log(err)) 
  console.log(`Example app listening on port ${port}`)
})