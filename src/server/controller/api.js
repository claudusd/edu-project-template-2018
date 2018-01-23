const express = require('express');
const config = require('../config.js');
const fs = require('fs');
const repository = require('../repository/Repository.js')
var router = express.Router();

/*
 Method : POST
 Url : /api/episodes
 Description : Add Episodes
 */
router.post('/', function (request, response) {
    var episode = request.body;
    if (episode) {
        episode = repository.add(episode);
        response.status(201);
        response.send(episode);
    } else {
        response.sendStatus(400);
    }
});

/*
 Method : GET
 Url : /api/episodes
 Description : Get List of all Episodes
 */
router.get('/api/episodes', function (request, response) {
    var episodes = repository.findAll();
    response.status(200);
    response.send(episodes);
});

/*
Method : GET
Url : /api/episodes/id
Description : Get Episode
 */

router.get('/', function (request, response) {
    var epi = repository.findBy(request.params.id);
    response.status(200);
    response.send(epi);
});

module.exports = router;
