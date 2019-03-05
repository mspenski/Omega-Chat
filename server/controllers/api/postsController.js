const postsController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

postsController.post('/', (req, res) => {
  console.log('posting')
  console.log(req.body)
  const { title, post } = req.body;

  db.Posts.create({ title, text: post })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

postsController.get('/',
  JWTVerifier,
  (req, res) => {
    db.Posts.find({})
      .then(results => {
        res.json(results);
      })
      .catch(error => {
        if (error) throw error
      })
  });

postsController.post('/:id/replies',
  JWTVerifier,
  (req, res) => {
    const { fullName, text } = req.body;
    console.log('working')

    db.Posts.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { replies: { fullName, text } } },
      { safe: true, upsert: true },
      function (err, doc) {
        if (err) {
          res.send('bad')
          throw err;
        }
        else {
          console.log('document created: ', doc)
          res.send(200)
        }
      }
    )
  });


module.exports = postsController;