var fs = require('fs');
const config = require('./config');

exports.insert = (episode) => {
    console.log("aaaaa");
    return new Promise((resolve, reject) => {

        const path = `${config.data}/${episode.id}.json`;
        console.log('bbbbbb');
        const data = JSON.stringify(episode);
        console.log("ccccc");

        fs.writeFile(path, data, function (err) {
           if(err){
               console.log(err);
               reject(err);
               return;
           }

           resolve(episode);
        });
    });
};