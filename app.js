const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
let http = require('http').Server(app);
const io = require('socket.io')(http);
global.io = io;
const indexRoute = require('./routes/index.route');
const authentication_route = require('./routes/auth.route');
const conversation_route = require('./routes/conversation.route');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'))
app.use(cors());
var Messages = mongoose.model('messages',{ name : String, message : String});

app.use('/', indexRoute);
app.use('/auth',  authentication_route);
app.use('/conversation', conversation_route);

io.on('connection', () =>{ 
  console.log('Connecting');
});

mongoose.connect(process.env.mongodbURI, 
  {useUnifiedTopology: true,useNewUrlParser: true },
  (err) => {
    if(!err)
      console.log("Connect successfully");
    else console.log(err);
})
let server = http.listen(5000, ()=> {
  console.log('server is running on port', server.address().port);
})