const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = Schema({
  author: {type: Schema.Types.ObjectId, ref: "user2", required: true},
  message: {type: String},
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
},{collection: 'message',versionKey: false})

module.exports = mongoose.model('message', schema);