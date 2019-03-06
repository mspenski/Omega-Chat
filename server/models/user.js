const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: 'Email address is required'
  },
  password: {
    type: String,
    trim: true,
    required: 'A password is required',
    validate: [
      function (input) {
        return input.length >= 4
      },
      'Password should be four characters or longer'
    ]
  },
  fullName: {
    type: String,
    trim: true,
    required: 'First & last name required,'
  },
  phone: {
    type: String,
    trim: true,
    required: 'Phone # is required in format XXX-XXX-XXXX',
  },
  position: {
    type: String,
    trim: true,
    default: 'Member'
  }
})

class newUser {
  constructor({ id, email, password, fullName, phone, position }) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.fullName = fullName;
    this.phone = phone;
    this.position = position;
  }

  comparePassword(challenge) {
    return this.password === challenge;
  }
}

UserSchema.loadClass(newUser);
let User = mongoose.model('User', UserSchema);


module.exports = User;
