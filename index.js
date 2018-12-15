const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());

let genres = [
  {id: 1, genre: "Action"},
  {id: 2, genre: "Horror"}
  ];

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

app.get('/api/genres/:id', (req, res)=>{
  const id = req.params.id;
  const genre = genres.find((element) => {return element.id === parseInt(id)});
  res.send(genre);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`App is listening on port ${port}`)
});