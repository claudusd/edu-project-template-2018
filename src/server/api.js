var express = require('express');
var routeur = express.Router();
var bodyParser = require('body-parser');
var crud = require('./filesFunction');


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
  crud.createJson("./src/data/", episode);

});

//listage des épisodes
routeur.get('/episodes', function(req,res){
  res.send('GET');
  console.log(crud.findAll());

})



module.exports = routeur;
