const express = require('express');
const React = require('react');
const multer = require('multer');
const router = express.Router();
const MovieRegisterApp = require('../react/pages/movie_register/movieRegisterApp').default;

const getHtml = require('./index')._getHtml
const query = require('./index')._query;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.get('/movie', (req, res) => {
    res.send(getHtml(<MovieRegisterApp data={{ a: 2 }} />, 'movieRegister_bundle'));
});

router.post('/movie', upload.array('movie_info', 10), (req, res) => {
    const info = req.body.movie_info;
    const filenames = req.files.map(item => '/images/' + item.filename);
    const actorList = [];
    let movieId;

    Promise
        .all(info[6].split(' ').map(q => query(`INSERT INTO actor(name) values(?)`, [q])))
        .then(r => {
            actorList.push(...r);
            return query(`INSERT INTO director(name) values(?)`, [req.body.movie_info[1]])
        })
        .then(r => {
            movieId = r.insertId;
            return query(`INSERT INTO movie(title, runtime, price, description, poster_path,       
                director_id, backdrop_path, small_backdrop_path, release_date) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [info[0], parseInt(info[4]), parseInt(info[5]), info[2], filenames[0], r.insertId, filenames
                [1], filenames[2], info[3]])
        })
        .then(r => {
            return Promise.all(actorList.map(q => query(`INSERT INTO movie_role(movie_id, actor_id) VALUES(?, ?)`, [r.insertId, q.insertId])));
        })
        .then(r => res.send('ok'));
});

module.exports = router;
