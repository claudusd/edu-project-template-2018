const express = require('express');
const api = require('./api.js');
const config = require('./config.js');
var app = require('express')();


app.get('/', (req,res) => res.send('coucou petite perruche !'));
app.use('/',api);
app.listen(config.port,()=>console.log('serveur de dev démarer !'));
