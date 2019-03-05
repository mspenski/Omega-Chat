const postsController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

postsController.post('/posts', JWTVerifier, (req, res) => {
  res.json(req.user);
});

postsController.get('/posts', JWTVerifier, (req, res) => {
  res.json(req.user);
});

module.exports = postsController;