var mongoose =  require('mongoose');
var validator = require('validator');
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
    return password == this['password'];
};

var User = mongoose.model('User', userSchema);

module.exports = User;
