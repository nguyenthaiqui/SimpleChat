const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = Schema({
  user_one: {type: Schema.Types.ObjectId, ref: "user2", required: true},
  user_two: {type: Schema.Types.ObjectId, ref: "user2", required: true},
  message: [{type: Schema.Types.ObjectId, ref: "message", required:true}]
},{collection: 'conversation',versionKey: false})

module.exports = mongoose.model('conversation', schema);