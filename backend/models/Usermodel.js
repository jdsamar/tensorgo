const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:{
        type: Number,
    },
    name:{
        type: String
    },
    email:{
        type: String
    },
    gender: {
        type: String
    },
    status:{
        type: String
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User