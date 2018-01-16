var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// define the home page route
router.get('/', function(req, res) {
    res.send('yolotest');
});

router.post('/', function(req,res) {
    console.log('-*-*-*-*-*-*-*-*-*-*-');
    console.log(req.body);

    res.send('yolooyoyoyo');
});

module.exports = router;
