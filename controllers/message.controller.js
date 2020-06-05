const User = require('../models/User.model');
const Message = require('../models/Message.model');
const handleError = require('../utils/handle-error');
const moment = require('moment');
const path = require('path');

async function sendMessage(req, res){
  let message = new Message( {
    author: req.body.user_id,
    message: req.body.message,
  });
  await message.save((error)=> {
    if(error)
      res.status(500).json(handleError.internalError(error,500));
    res.status(200).json({
      code: 200,
      message: "Send message successfully"
    });
  })
}
async function getMessage(req, res){
  let message = await Message.find().populate('author','full_name');
  let response = [];
  for(item of message){
    let created_at = moment(item.created_at).format();
    let updated_at = moment(item.updated_at).format();
    response.push({
      _id: item._id,
      user: item.author.full_name,
      message: item.message,
      created_at: created_at,
      updated_at: updated_at
    })
  }
  return res.status(200).json({
    code:200,
    data: response
  })
}

function view(req, res){
  res.sendFile(path.join(__dirname, '../view/conversation/conversation.html'));
}
function style(req,res){
  res.sendFile(path.join(__dirname, '../view/conversation/conversation.css'));
}
module.exports = {
  sendMessage,
  getMessage,
  view, style
}