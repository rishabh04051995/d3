var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/user:', function(req, res, next) {
  res.send(req.params);
});

router.post('/', function(req, res, next) {
  res.send({ title: 'Fuck off' });
});

module.exports = router;
