const eventsController = require('express').Router();

const db = require('../../models');
// const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');


eventsController.get('/',
  // JWTVerifier,
  (req, res) => {
    db.Events.find({})
      .then(results => {
        res.json(results);
      })
      .catch(error => {
        if (error) throw error
      })
  });

module.exports = eventsController;