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
router.get('/', function (request, response) {
    var episodes = repository.findAll();
    response.status(200);
    response.send(episodes);
});

/*
 Method : GET
 Url : /api/episodes/id
 Description : Get Episode
 */

router.get('/:idEp', function (request, response) {
    var epi = repository.findBy(request.params.id);
    response.status(200);
    response.send(epi);
});


router.delete('/:idEp', function(req,res){
    var idEp = req.params.idEp;
    var path = config.data + "/" + idEp + ".json";
    if(fs.existsSync(path)){
        fs.unlinkSync(path);
        return res.sendStatus(204);
    }else {
        return res.sendStatus(404);
    }
});

router.put('/:idEp', function(req,res){
    var idEp = req.params.idEp;
    var path = config.data + "/" + idEp + ".json";
    var episode = req.body;
    episode.name = req.body.name;
    episode.code = req.body.code;
    episode.note = req.body.note;
    episode.id = idEp;
    if(fs.existsSync(path)){
        fs.writeFile(path, JSON.stringify(episode), function() {
            res.sendStatus(200);
        });
    }else {
        return res.sendStatus(404);
    }
});

module.exports = router;