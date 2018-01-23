var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var repository = require('./repository.js');
var uuid = require('node-uuid');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// define the home page route
router.get('/', function(req, res) {
    res.send('yolotest');
});


router.post('/', function(req,res) {

    const id = uuid.v4();
    var episode = req.body;
    episode['id'] = id;

    repository.insert(episode, "data/"+id+".json");

    res.send(episode);
});

module.exports = router;
