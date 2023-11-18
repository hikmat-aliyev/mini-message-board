const { Router } = require('express');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

require('dotenv').config()

mongoose.connect(process.env.DB_STRING);

const messageSchema = new mongoose.Schema({
  text: String,
  user: String,
  added:{ type: Date }
})

const Message = mongoose.model('Message', messageSchema);

/* GET home page. */
router.get('/', async function(req, res) {
  try {
    const messages = await Message.find();
    res.render('index', {title: 'Mini message board', messages: messages})
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

router.post('/new', async function(req, res) {
  try {
    await Message.create({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
    res.redirect('/')
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
})

router.get('/new', function(req, res) {
  res.render('form')
})

module.exports = router;