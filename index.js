const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());

app.get('/', (req, res)=>{
  res.send('This is the home page');
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`App is listening on port ${port}`)
});