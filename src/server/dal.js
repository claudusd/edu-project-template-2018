var fs = require('fs');

const config = require('./config');
const path = require('path');


function readFile(filePath) {
    return new Promise((resolve, reject) => {

        fs.readFile(path.join(config.data, filePath), 'utf-8', function (err, ep){

            if(err){
                reject(err);
                return;
            }

            resolve(JSON.parse(ep));
        });
    });
};


exports.insert = (episode) => {

    return new Promise((resolve, reject) => {

        const path = `${config.data}/${episode.id}.json`;
        const data = JSON.stringify(episode);


        fs.writeFile(path, data, function (err) {

           if(err){
               reject(err);
               return;
           }

           resolve(episode);
        });
    });
};


exports.findAll = () => {

    return new Promise((resolve, reject) => {

        fs.readdir(config.data, (err, files) => {

            if(err){
                reject(err);
                return;
            }

            Promise.all(files.map((episode) => { return readFile(episode) }))
                .then((episodes) => { resolve(episodes) });

        });
    });
};