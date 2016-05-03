/**
 * Created by kebab on 27-04-2016.
 */
var mongoose = require('mongoose');
module.exports = mongoose.model('User',{
    email: String,
    password: String
});