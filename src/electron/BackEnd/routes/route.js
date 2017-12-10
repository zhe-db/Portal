var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	console.log('calling main index function');
  	res.json({'Project Code': 'Portal'});
});

module.exports = router;
