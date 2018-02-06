var express = require('express');
var routeur = express.Router();
var bodyParser = require('body-parser');
var dal = require('./filesFunction');


routeur.use(bodyParser.json());
routeur.use(bodyParser.urlencoded({
  extended: true
}));

routeur.use(function timelog(req, res, next) {
  console.log('TIME : ', Date.now());
  next();
});

//création d'épisodes
routeur.post('/episodes', function(req, res) {
  res.send('POST');

  let episode = req.body;
  dal.createJson("./src/data/", episode);

});

//listage des épisodes
/*routeur.get('/episodes', function(req,res){
  dal.findAll()
    .then((episodes) => {
      res.status(200);
      res.send(episodes);
    });
    .catch((err)=>{res.sendStatus(500);});
});*/

routeur.get('/episode/:id', function(req, res) {
  dal.findById(req.params.id)
    .then((episode) => {
      res.status(200);
      res.send(episode);
    })
  .catch(err => {
    res.sendStatus(500).end;
  });
})


module.exports = routeur;
