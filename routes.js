var express = require('express');
var polls = require('./controllers/polls.js');
var router = express.Router();

router.get('/', polls.home);
router.post('/', polls.create);

router.get('/:id', polls.show);
router.post('/:id', polls.vote);

router.get('/:id/results', polls.results);

module.exports = router;
