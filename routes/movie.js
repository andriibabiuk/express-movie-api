var express = require('express');
var router = express.Router();
const movieDetails = require('../data/movieDetails');

router.get('/:movieId', function (req, res, next) {
	const movieId = req.params.movieId;
	const results = movieDetails.find(movie => movie.id === Number(movieId));
	if (!results) {
		res.json({
			msg: 'Movie ID is not found',
		});
	} else {
		res.json(results);
	}
});

module.exports = router;
