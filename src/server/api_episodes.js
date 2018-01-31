var express = require('express')
var router = express.Router()

var bodyParser = require('body-parser')
const dal = require('./dal.js')

var uuidV4 = require('node-uuid')

var f_path = "/home/etud/qurochet/edu-project-template-2018/save-episodes";



router.use(bodyParser.json())

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})


router.post('/', function (req, res) {

    const ep = req.body;
    ep.id = uuidV4.v4();

    dal.insert(ep)
        .then((episode) => {
            res.status(201);
            res.send(episode);
        })
        .catch((err) => {
            res.sendStatus(400);
        });

})


router.get('/all/', function(req, res) {

    dal.findAll()
        .then((episodes) => {
            res.status(201);
            res.send(episodes);
        })
        .catch((err) => {
            res.sendStatus(400);
        });

});

module.exports = router;
