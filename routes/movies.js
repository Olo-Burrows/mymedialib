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
        db(DB_NAME).insert(req.body);
    });
//    .post(function(req, res) {
//        var movie = req.body;
//        var db = req.db;
//        var collection = db.get('movies');
//        collection.insert(movie, function(err, movie) {
//            if (err) res.json(500, err);
//            else res.json(201, movie);
//        });
//    });

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

//    .get(function(req, res) {
//        var db = req.db;
//        var collection = db.get('movies');
//        collection.findById(req.params.id, function(err, movie) {
//            res.send(movie);
//        });
//    })
//    .put(function(req, res) {
//        var id = req.params.id;
//        var movie = req.body;
//        var db = req.db;
//        var collection = db.get('movies');
//        collection.update({ _id: id }, movie, function(err, movie) {
//            if (err) res.json(500, err);
//            else if (movie) res.json(movie);
//            else res.json(404);
//        });
//    })
//    .delete(function(req, res) {
//        var id = req.params.id;
//        var db = req.db;
//        var collection = db.get('movies');
//        collection.remove({ _id: id }, function(err) {
//            if (err) res.json(500, err);
//            else res.json(204);
//        });
//    });

//// JSON API
//app.get('/server/api/movies', api.fetchMovies);
//app.get('/server/api/movies/:id', api.fetchMovie);
//app.post('/server/api/movies', api.addMovie);
//app.put('/server/api/movies', api.updateMovie);
//app.delete('/server/api/movies/:id', api.deleteMovie);

//// Deletes a movie
//exports.del = function(req, res) {
//	var id = req.params.id;
//	collection.remove({_id: id}, function(err){
//		if (err) res.json(500, err);
//		else res.json(204);
//	});
//};

module.exports = router;