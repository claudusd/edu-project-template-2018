/**
 * Created by emlouradou on 23/01/18.
 */
const config = require('../config.js');
const fs = require('fs');

class Repository {
    constructor() {

    }

    findAll() {
        var episodes = [];
        var listFiles = fs.readdirSync(config.data)
        listFiles.forEach(function (file) {
            var epi = JSON.parse(fs.appendFileSync(config.data+"/"+file,"utf-8"));
            episodes.push(epi);
        });
        return episodes;
    }

    findBy(id) {
        var epi = -1;
        var listFiles = fs.readdirSync(config.data)
        listFiles.forEach(function (file) {
            var obj = JSON.parse(fs.appendFileSync(config.data+"/"+file,"utf-8"));
            if(obj.id == id){
                var epi = obj;
            }
        });
        if(epi == -1){
            response.status(404);
        }
    }

    add(object) {
        var episode = object;
        episode.id = episode.name.replace(/ /g, '') + episode.code;
        fs.writeFileSync(config.data + '/' + episode.id + '.json', JSON.stringify(episode));
        return episode;
    }

    edit(id, newValues) {

    }
}

var repository = new Repository();
module.exports = repository;