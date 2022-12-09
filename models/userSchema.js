const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    firstname:{ type:String,require:true},
    lastname: { type:String,require:true},
    email: { type:String,require:true},
    password: { type:String,require:true},
    createdAt: { type:Date,default:Date.now},
    updatedAt: { type:String,require:false}
})

module.exports = mongoose.model('user',userSchema);