const express = require('express');
const router = express.Router();
const message_controller = require('../controllers/message.controller');

router.post('/message', message_controller.sendMessage );
router.get('/message', message_controller.getMessage);
router.get('/', message_controller.view);
router.get('/style', message_controller.style);

module.exports = router;
