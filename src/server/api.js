var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var repository = require('./repository.js');
var uuid = require('node-uuid');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// Recup de tt les épisodes
router.get('/', function(req, res) {
    repository.findAll(function(result){
        res.status(result['status']).json(result['episodes']);
    });
});


// Recup d'un episode par son ID
router.get('/:id', function(req, res) {
    repository.findById(req.params.id,function(result){
        res.status(result['status']).json(result['episode']);
    });
});


router.post('/', function(req,res) {
    const id = uuid.v4();

    if(Object.keys(req.body).length != 3){
        res.status(400).json({message : 'Care ! Invalid number of parameters in the request'});
    } else if(!("name" in req.body) || !("code" in req.body) || !("score" in req.body)){
        res.status(400).json({message : 'Care ! Wrong parameters keys in the request'});
    }

    var episode = req.body;
    episode['id'] = id;

    repository.insert(episode, "data/"+id+".json", function(result){
        res.status(result['status']).json(result['episode']);
    });
});


router.delete('/:id', function(req, res) {
    file.delete(req.params.id,function(result){
        res.status(result['status']).json(result['episode']);
    });
});

module.exports = router;
