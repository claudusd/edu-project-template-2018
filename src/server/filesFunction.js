const uuid = require('node-uuid');


const fs = require('fs');

//creation d'un fichier JSON
function createJson(location, episode) {
  let data = JSON.stringify(episode);
  let episodeID = uuid.v4();
  fs.writeFileSync(location + "episode_" + episodeID + ".json", data);
}


//liste des fichiers
/*function findAll(
  return new Promise((function (reslove, reject)  {
    const path = "./src/data/";
    fs.readdir(path, (err, files) => {
      files.forEach(file => {
        console.log(file);
      });
    }) {
      if (err) {
        reject(err);
        return;
      } else {
        resolve('Sucess');
        return;
      }
    }
  });

)}*/

/*  const path = "./src/data/";
  fs.readdir(path, (err, files) => {
    files.forEach(file => {
      console.log(file);
    })
  })
}*/
/*
function findById(id) {
  let path = "./src/data/";
  fs.readFile("episode_"+id+".json", 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
  }
}
*/

function findById(id) {
  return new Promise(function(resolve, reject) {
    const path = "./src/data";
    fs.readFile(path,id+".json", 'utf8', function(err, episode){
      if(err){
        reject(err);
        return;
      }
      else{
        resolve(episode);
        return;
      }
    });

  });
}




exports.createJson = createJson;
//exports.findAll = findAll;
exports.findById = findById;
