const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = Schema({
  username: {type: String, required:true},
  password: {type: String, required: true},
  full_name: {type: String, reqruired: true},
},{collection: 'user2',versionKey: false})

module.exports = mongoose.model('user2', schema);