var express = require('express');
var router = express.Router();
var conn = require('../config/database')();

router.get('/movie', (req, res) => {
    const genreQuery = req.query.genre == -1 || !req.query.genre ? '' : `WHERE movie_genres.genre_id = ${req.query.genre}`;
    const sortQuery = ['vote_average DESC', 'runtime ASC', 'release_date DESC'][req.query.sort - 1];
    const query = `SELECT DISTINCT id, title, description, poster_path, backdrop_path, small_backdrop_path, vote_average, release_date, vote_count, runtime FROM movie JOIN movie_genres ON movie.id=movie_genres.movie_id ${genreQuery} ORDER BY ${sortQuery} LIMIT ${(req.query.page-1) * 50}, 50`;
    conn.query(query, (err, row) => {
        res.send(row);
    });
});

module.exports = router;
