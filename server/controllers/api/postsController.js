const postsController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

postsController.post('/posts', JWTVerifier, (req, res) => {
  const { title, text } = req.body;

  db.Posts.create({ title, text, date })
    .then(post => res.json(post))
    .catch(err => res.json(err));
});


postsController.get('/posts', JWTVerifier, (req, res) => {
  db.Posts.find({})
    .then(results => {
      res.json(results);
    })
    .catch(error => {
      if (error) throw error
    })
});

module.exports = postsController;