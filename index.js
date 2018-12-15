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

app.post('/api/genres', (req, res)=>{
  const schema = Joi.object().keys({
    genre: Joi.string().required()
  });
  const { error } = Joi.validate(req.body, schema);
  if(error)res.status(400).send(error.details[0].message)
  const genre = req.body.genre;
  const id = genres.length + 1;
  const newGenre = {
    id: id,
    genre: genre
  }

  genres.push(newGenre);
  res.status(201).send(newGenre);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`App is listening on port ${port}`)
});