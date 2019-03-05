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

postsController.post('/reply',
  JWTVerifier,
  (req, res) => {
    const { fullName, text } = req.body;
    console.log('working')

    db.Posts.findByIdAndUpdate(
      { _id: "5c7e9ccdc57b75938bfc174f" },
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

module.exports = postsController;