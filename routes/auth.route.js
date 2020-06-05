const express = require('express');
const router = express.Router();
const auth_controller = require('../controllers/auth.controller');

router.get('/login', auth_controller.loginView);
router.get('/css', auth_controller.styleLoginView);
router.get('/background', auth_controller.backgroundLogin);
router.post('/login', auth_controller.login);
router.post('/register', auth_controller.register);
router.get('/',auth_controller.view);
router.get('/style', auth_controller.style);

module.exports = router;
