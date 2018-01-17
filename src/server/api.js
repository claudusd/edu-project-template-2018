const express = require('express');
const config = require('./config.js');
const fs = require('fs');
var router = express.Router();

/*
 Method : POST
 Url : /api/episodes
 Description : Add Episodes
 */
router.post('/', function (request, response) {
  var ep = request.body;

  if (ep) {
    ep.id = "firstEp";

    fs.writeFileSync(config.data + '/' + ep.id + '.json', JSON.stringify(ep));

    response.status(201);
    response.send(ep);
  } else {
    response.sendStatus(400);
  }
});

/*
 Method : GET
 Url : /api/episodes
 Description : Get List of Episodes
 */
router.get('/', function (request, response) {
  var episodes = [];

  fs.readdir(config.data, function (err, files) {
    if (err) {
      throw err;
    } else {
      files.forEach(function (file) {

      });
    }
  });

  response.status(200);
  response.send(episodes);
});

module.exports = router;
