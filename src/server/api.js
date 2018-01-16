var express = require('express');
var routeur = express.Router();
var bodyParser = require('body-parser');


routeur.use(bodyParser.json());
routeur.use(bodyParser.urlencoded({ extended: true }));

routeur.use(function timelog(req,res,next){
  console.log('TIME : ',Date.now());
  next();
});

routeur.post('/', function (req,res){
  res.send('POST');

  console.log(req.body);

});

module.exports = routeur;
