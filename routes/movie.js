var express = require('express');
var router = express.Router();
const movieDetails = require('../data/movieDetails');
const requireJSON = (req, res, next) => {
	if (!req.is('application/json')) {
		res.json({ msg: 'Content type must be application/json' });
	} else {
		next();
	}
};

router.param('movieId', (req, res, next) => {
	next();
});
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

router.get('/top_rated', function (req, res, next) {
	let page = req.query.page;
	if (!page) {
		page = 1;
	}
	const results = movieDetails.sort((a, b) => {
		return b.vote_average - a.vote_average;
	});
	const indexToStart = page * 20;
	res.json({ page, results: results.slice(indexToStart, indexToStart + 19) });
});
router.post('/:movieId/rating', requireJSON, (req, res, next) => {
	const movieId = req.params.movieId;
	const userRating = req.body.value;
	if (userRating < 0.5 || userRating > 10) {
		res.json({ msg: 'Rating must be between .5 and 10' });
	} else {
		res.json({
			msg: 'Thank you for submitting your rating',
			status_code: 200,
		});
	}
});

router.delete('/:movieId', requireJSON, (req, res, next) => {
	res.json({ msg: 'Rating deleted!' });
});
module.exports = router;
