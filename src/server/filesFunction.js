const uuid = require('node-uuid');


const fs = require('fs');

//creation d'un fichier JSON
function createJson(location, episode) {
  let data = JSON.stringify(episode);
  let episodeID = uuid.v4();
  fs.writeFileSync(location + "episode_" + episodeID + ".json", data);
}


//liste des fichiers
function findAll() {
  let path = "./src/data/";
  fs.readdir(path, (err, files) => {
    files.forEach(file => {
      console.log(file);
    })
  })
}
/*
function findById(id) {
  let path = "./src/data/";
  fs.readFile("episode_"+id+".json", 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
  }
}
*/



exports.createJson = createJson;
exports.findAll = findAll;
