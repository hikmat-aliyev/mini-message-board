const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form');
});

module.exports = router;


// const express = require('express');
// const router = express.Router();

// const messages = [
//   {
//     text: 'Hi dasthere',
//     user: 'Hiko',
//     added: new Date()
//   }, 
//   {
//     text: 'Hello',
//     user: 'Sonic',
//     added: new Date()
//   }
// ]

// /* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Mini message board', messages: messages });
// });

// router.post('/new', function(req, res) {
//   messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
//   res.redirect('/')
// })

// module.exports = router;
