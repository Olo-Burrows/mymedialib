var express = require('express');
var router = express.Router();
var db = require('../db/config');

const DB_NAME = 'movies';

console.log(':: MOVIES ::');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'MOVIES'
    });
});

router.route('/server/api/movies')
    .get(function (req, res) {
        console.log(':: MOVIES :: get movies');
        var movies = db(DB_NAME);
        res.send(movies);
    })
    .post(function (req, res) {
        console.log(':: MOVIES :: insert movie');
        var movie = db(DB_NAME).insert(req.body);
        res.send(movie);
    });

/* GET movie from id. */
router.route('/server/api/movies/:id')
    .get(function (req, res) {
        console.log(':: MOVIES :: get movie / id : ' + req.params.id);
        var movie = db(DB_NAME).getById(req.params.id);
        res.send(movie);
    })
    .put(function (req, res) {
        console.log(':: MOVIES :: update movie / id : ' + req.params.id);
        var id = req.params.id,
            movie = req.body;
        var upMovie = db(DB_NAME).updateById(id, movie);
        res.send(upMovie);
    })
    .delete(function (req, res) {
        console.log(':: MOVIES :: delete movie / id : ' + req.params.id);
        var movie = db(DB_NAME).removeById(req.params.id);
        res.send(movie);
    });

module.exports = router;