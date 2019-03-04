const usersController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

usersController.get('/me', JWTVerifier, (req, res) => {
  res.json(req.user);
});

usersController.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.Users.findOne({ email })
    .then(user => {
      if (!user.comparePassword(password)) {
        return res.status(401).send("Unauthorized");
      }

      res.json({
        token: jwt.sign({ sub: user.id }, process.env.JWT_SECRET),
        user
      });
    });
});

usersController.post('/register', (req, res) => {
  const { email, password, fullName, phone, position } = req.body;
  console.log(email, password, fullName, phone, position)
  db.Users.create({ email, password, fullName, phone, position })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

usersController.get('/roster', (req, res) => {
  db.Users.find({})
    .then(users => {
      res.json(users)
    })
})

module.exports = usersController;
