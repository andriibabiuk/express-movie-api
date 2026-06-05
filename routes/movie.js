var express = require('express');
var router = express.Router();

router.get('/:movieId', function (req, res, next) {
	const movieId = req.params.movieId;
	res.render('index', { title: 'Express' });
});

module.exports = router;
