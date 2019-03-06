const eventsController = require('express').Router();

const db = require('../../models');
// const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

eventsController.post('/', (req, res) => {
  console.log('adding event')
  console.log(req.body)
  const { title, description, start, end } = req.body;

  db.Events.create({ title, description, start, end })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});


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