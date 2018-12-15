const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());

let genres = [];

app.get('/', (req, res)=>{
  res.send('This is the home page');
});

app.get('/api/genres', (req, res)=>{
  res.status(200).send(genres);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`App is listening on port ${port}`)
});