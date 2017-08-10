var mongoose = require('mongoose')
var validate = require('mongoose-validator');
var bcrypt = require('bcrypt')

var checkName = [
  validate({
    validator: 'isLength',
    arguments: [2, 500],
    message: 'First and Last Name should be at least 3 characters'
  })
]

var UserSchema = new mongoose.Schema({
  first: {
    type: String,
    required: true,
    trim: true,
    validate: checkName
  },
  last: {
    type: String,
    required: true,
    trim: true,
    validate: checkName
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: { 
        validator: function(val) {
            return /\S+@\S+\.\S+/.test(val);
        },
        message: "Your email is invalid"
    }
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    trim: true,
    default: 'Male'
  },

  birthday: {
      type: Date,
  },

  password: {
    type: String,
    required: true,
    trim: true,
    validate: { 
        validator: function(val) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(val);
        },
        message: "Password failed validation, you must have at least 1 number, uppercase and special character"
    }
  },
}, {timestamps: true})

UserSchema.methods.hash_password = function (pass) {
  return bcrypt.hashSync(pass, bcrypt.genSaltSync(8))
}
UserSchema.pre('save', function (done) {
  this.password = this.hash_password(this.password)
  done()
})

mongoose.model('User', UserSchema);