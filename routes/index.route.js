const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../view/index/index.html'));
});
router.get('/css', (req,res)=>{
  res.sendFile(path.join(__dirname, '../view/index/index.css'));
})

module.exports = router;