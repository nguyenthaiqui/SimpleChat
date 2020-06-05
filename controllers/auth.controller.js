const User = require('../models/User.model');
const handleError = require('../utils/handle-error');
const path = require('path');

async function login (req, res){
  try {
    if(!req.body.username || !req.body.password)
      return res.status(400)
        .json(handleError.missingParameters(400));
    req.body.username = req.body.username.toLowerCase();
    let user = await User.findOne({$and: [{username: req.body.username},{password: req.body.password}]});
    if(!user){
      return res.status(400)
        .json(handleError.userNotFound(400));
    }
    return res.status(200).json({
      code: 200,
      message: "Login successfully!",
      data: user
    })
  } catch (error) {
    return res.status(500).
      json(handleError.internalError(error));
  }
}

async function register (req, res){
  try {
    if(!req.body.username || !req.body.password)
      return res.status(400)
        .json(handleError.missingParameters(400));
    req.body.username = req.body.username.toLowerCase();
    let user = await User.findOne({username: req.body.username});
    if(user){
      return res.status(400)
        .json({
          code: 400,
          message: "User exist"
        });
    }
    let newUser = User({
      username: req.body.username,
      password: req.body.password,
      full_name: req.body.full_name,
    });
    await newUser.save();
    return res.status(200).json({
      code: 200,
      message: "Register sucessfully"
    });
  } catch (error) {
    return res.status(500).json(handleError.internalError(error,status));
  }
}

function loginView(req,res){
  res.sendFile(path.join(__dirname, '../view/authentication/login/login.html'));
}
function styleLoginView(req, res){
  res.sendFile(path.join(__dirname, '../view/authentication/login/login.css'));
}
function backgroundLogin(req,res){
  res.sendFile(path.join(__dirname, '../view/authentication/login/background.jpg'))
}

function view(req, res){
  res.sendFile(path.join(__dirname, '../view/authentication/authentication.html'));
}
function style(req,res){
  res.sendFile(path.join(__dirname, '../view/authentication/authentication.css'));
}


module.exports = {
  login,
  register,
  loginView,
  styleLoginView,
  backgroundLogin,
  view, style
}