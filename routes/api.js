var express = require('express');
var router = express.Router();
var conn = require('../config/database')();

const query = (...args) => {
    return new Promise((resolve, reject) => {
        conn.query(...args, (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });
}

router.get('/movie', (req, res) => {
    const title = req.query.title;
    const page = req.query.page;
    const pageLimit = page == 0 ? '' : `LIMIT ${(page-1) * 50}, 50`;
    const genreQuery = req.query.genre == -1 || !req.query.genre ? `WHERE title like '%${title}%'` : `WHERE movie_genres.genre_id = ${req.query.genre} and title like '%${title}%'`;
    const sortQuery = ['vote_average DESC', 'runtime ASC', 'release_date DESC'][req.query.sort - 1];
    const query = `SELECT DISTINCT id, title, description, poster_path, backdrop_path, small_backdrop_path, vote_average, release_date, vote_count, runtime FROM movie JOIN movie_genres ON movie.id=movie_genres.movie_id ${genreQuery} ORDER BY ${sortQuery} ${pageLimit}`;
    conn.query(query, (err, row) => {
        res.send(row);
    });
});

router.get('/actor', (req, res) => {
    const query = `SELECT * FROM actor WHERE name LIKE "%${req.query.q}%"`;
    conn.query(query, (err, row) => {
        res.send(row);
    });
});

router.get('/director', (req, res) => {
    const query = `SELECT * FROM director WHERE name LIKE "%${req.query.q}%"`;
    conn.query(query, (err, row) => {
        res.send(row);
    });
});

router.post('/purchase', (req, res) => {
    const balance = 3333;
    if(balance > 2000) {
        res.send('true');
    } else {
        res.send('false');
    }
});

router.delete('/movie', (req, res) => {
    const id = req.query.id;
    query(`delete from movie_genres where movie_id = ${id}`)
        .then(r=> query(`delete from movie_role where movie_id = ${id}`))
        .then(r=> query(`delete from movie where id = ${id}`))
        .then(r => {
            res.send(true);
        })
        .catch(r => {
            res.send(false);
        })
});

router.put('/movie', (req, res) => {
    const id = req.query.id;
    query(`UPDATE movie SET description = "${req.query.description}" WHERE id=${id}`)
        .then(r => {
            res.send('true');
        })
        .catch(r => {
            console.log(r)
            res.send('false');
        })
});


module.exports = router;
