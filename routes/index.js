var express = require('express');
var router = express.Router();
var MainApp = require('../react/pages/main/mainApp').default;
var CategoryApp = require('../react/pages/category/categoryApp').default;
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var conn = require('../config/database')();

const query = (...args) => {
    return new Promise((resolve, reject) => {
        conn.query(...args, (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });
}

const getHtml = (page, bundleName) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <link rel='stylesheet' href='/stylesheets/main.css' />
    </head>
    <body>
        <div id='root'>${ReactDOMServer.renderToString(page)}</div>
        <script src="/${bundleName}.js"></script>
    </body>
    `;
}

router.get('/', function (req, res, next) {
    let data = {};
    if(req.user) data.user = req.user;
    query(`SELECT * FROM movie ORDER BY id LIMIT 3;`)
        .then(r => {
            data.mainData = r;
            return query(`(select *, '1', '1' from movie order by vote_average desc limit 15) union
            (select *, '1', '1' from movie order by vote_average desc limit 15, 15) union
            (select *, '1', '1' from movie order by vote_average desc limit 30, 15) union
            (select * from movie, movie_genres where movie_genres.movie_id = movie.id and movie_genres.genre_id = 27 limit 15) union
            (select * from movie, movie_genres where movie_genres.movie_id = movie.id and movie_genres.genre_id = 35 limit 15) union
            (select * from movie, movie_genres where movie_genres.movie_id = movie.id and movie_genres.genre_id = 10749 limit 15) union
            (select * from movie, movie_genres where movie_genres.movie_id = movie.id and movie_genres.genre_id = 28 limit 15);`);
        })
        .then(r => {
            data.sliderData = r;
            res.send(getHtml(<MainApp data={data} />, 'main_bundle'));
        })
        .catch(e => res.status(500).send(e.sqlMessage));
});

router.get('/category', function (req, res) {
    const data = {};
    if(req.user) data.user = req.user;
    query(`SELECT * FROM genre;`)
        .then(r=> {
            data.genreList = [{id: -1, genre: "모든 장르"}, ...r];
            return query(`SELECT * FROM movie ORDER BY vote_average DESC LIMIT 70`);
        })
        .then(r => {
            data.movieList = r;
            res.send(getHtml(<CategoryApp data={data}/>, 'category_bundle'));
        })
        .catch(e => res.status(500).send(e.sqlMessage));
});

router.get('/welcome', function (req, res) {
    console.log(req.user); //deserializeUser 함수가 페이지 넘어갈 때 마다 실행되면서 req.user에 내용을 채운다.
    res.render('welcome', { // req.user에 내용이 있으면 현재 세션정보가 있으므로 로그인중이고, 없으면 로그인 중이지 않음
        user: req.user
    });
});

router._getHtml = getHtml;
router._query = query;

module.exports = router;
