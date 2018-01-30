var fs = require('fs')

exports.insert = (episode) => {
    return new Promise((resolve, reject)=>{

        const path = '${config.data}/${episode.id}.json';
        const data = JSON.stringify(episode);

        fs.writeFile(path, data, function (err) {
           if(err){
               reject(err);
               return;
           }

           resolve(episode);
        });
    });
}