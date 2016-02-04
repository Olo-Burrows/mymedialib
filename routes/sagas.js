var express = require('express');
var router = express.Router();
var db = require('../db/config');

const DB_NAME = 'sagas';

console.log(':: SAGAS ::');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'SAGAS'
    });
});

router.route('/server/api/sagas')
    .get(function (req, res) {
        console.log(':: SAGAS :: get sagas');
        var sagas = db(DB_NAME);
        res.send(sagas);
    })
    .post(function (req, res) {
        console.log(':: SAGAS :: insert saga');
        db(DB_NAME).insert(req.body).then(function (saga) {
            res.send(saga);
        }, function (err) {
            res.status(500).send({ error: err });
        });
    });

/* GET saga from id. */
router.route('/server/api/sagas/:id')
    .get(function (req, res) {
        console.log(':: SAGAS :: get saga / id : ' + req.params.id);
        var saga = db(DB_NAME).getById(req.params.id);
        res.send(saga);
    })
    .put(function (req, res) {
        console.log(':: SAGAS :: update saga / id : ' + req.params.id);
        var id = req.params.id;
        db(DB_NAME).updateById(id, req.body);
        res.send();
    })
    .delete(function (req, res) {
        console.log(':: SAGAS :: delete saga / id : ' + req.params.id);
        var saga = db(DB_NAME).removeById(req.params.id);
        res.send(saga);
    });

module.exports = router;