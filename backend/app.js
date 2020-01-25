const express = require('express')
const bodyParser = require('body-parser')
const restful = require('node-restful')
const cors = require('cors')
const app = express()

const mongoose = restful.mongoose

// Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

// Middlewares
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

// ODM
const Client = restful.model('Client', {
  name: { type: String, required: true }
})

// Rest API
Client.methods(['get', 'post', 'put', 'delete'])
Client.updateOptions({new: true, runValidators: true})

// Routes
Client.register(app, '/clients')

// Start server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
