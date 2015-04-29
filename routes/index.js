var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.route('/server/api/movies')
    .get(function(req, res) {
        // GET movies list page.
        var db = req.db;
        var collection = db.get('movies');
        collection.find({}, {}, function(err, movies) {
            res.send({
                "movies": movies
            });
        });
    })
    .post(function(req, res) {
        var movie = req.body;
        var db = req.db;
        var collection = db.get('movies');
        collection.insert(movie, function(err, movie) {
            if (err) res.json(500, err);
            else res.json(201, movie);
        });
    });

/* GET movie from id. */
router.route('/server/api/movies/:id')
    .get(function(req, res) {
        var db = req.db;
        var collection = db.get('movies');
        collection.findById(req.params.id, function(err, movie) {
            res.send(movie);
        });
    })
    .put(function(req, res) {
        var id = req.params.id;
        var movie = req.body;
        var db = req.db;
        var collection = db.get('movies');
        collection.update({ _id: id }, movie, function(err, movie) {
            if (err) res.json(500, err);
            else if (movie) res.json(movie);
            else res.json(404);
        });
//        collection.findAndModify({ _id: movie._id }, { $set: movie }, { multi: false }, function(err, movie) {
//            if (err) res.json(500, err);
//            else if (movie) res.json(movie);
//            else res.json(404);
//        });
    })
    .delete(function(req, res) {
        var id = req.params.id;
        var db = req.db;
        var collection = db.get('movies');
        collection.remove({ _id: id }, function(err) {
            if (err) res.json(500, err);
            else res.json(204);
        });
    });

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

/* GET directors list page. */
router.get('/server/api/directors', function(req, res) {
    var db = req.db;
    var collection = db.get('directors');
    collection.find({}, {}, function(e, docs) {
        res.send({
            "directors": docs
        });
    });
});

module.exports = router;