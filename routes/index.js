const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hikmataliyevm:6423857hiko@cluster0.v25lknr.mongodb.net/?retryWrites=true&w=majority');

const messageSchema = new mongoose.Schema({
  text: String,
  user: String,
  added:{ type: Date, default: Date.now }
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

module.exports = router;