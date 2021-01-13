const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    userName : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true
    },
    new_login : {
        type:Boolean,
        default:true
    }
});

module.exports = mongoose.model('user',userSchema);