var mongoose =  require('mongoose');
var validator = require('validator');
var bcrypt   = require('bcrypt-nodejs');
var userSchema = new mongoose.Schema({
    name: 'String',
    email:  {
        type: 'String',
        validate: [ validator.isEmail, 'invalid email' ]
    },
    username: 'String',
    password: 'String'
});

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this['password']);
};

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

var User = mongoose.model('User', userSchema);

module.exports = User;
