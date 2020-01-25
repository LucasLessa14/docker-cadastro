const express = require('express');
const restful = require('node-restful');
const app = express();
const mongoose = restful.mongoose;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/mydb');

app.get('/', (req, res) => {
  res.send('Backend');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
