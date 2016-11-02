var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('many')
      .then( function(data) {
          res.json(data)
      })
});

router.post('/', function(req, res, next) {
    knex('many')
        .insert(req.body, '*')
        .then( function (data) {
            res.json(data)
        })
})

router.get('/:id', function(req, res, next) {
    knex('many')
        .where('id', req.params.id)
        .then( function (data) {
            res.json(data)
        })
})

router.put('/:id', function(req, res, next) {
    knex('many')
        .where('id', req.params.id)
        .update(req.body)
        .then( function(data) {
          res.json(data)
        })
})

router.delete('/:id', function(req, res, next) {
    knex('many')
        .where('id', req.params.id)
        .first()
        .del()
        .then( function(data) {
          res.json(data)
        })
})

module.exports = router;
