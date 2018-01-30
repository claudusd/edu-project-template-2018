/**
 * Created by emlouradou on 23/01/18.
 */
const config = require('../config.js');
const fs = require('fs');

class Repository {
    constructor() {

    }

    /*//GET all episode action
    findAll() {
        var episodes = [];
        var listFiles = fs.readdirSync(config.data)
        listFiles.forEach(function (file) {
            var epi = JSON.parse(fs.appendFileSync(config.data+"/"+file,"utf-8"));
            episodes.push(epi);
        });
        return episodes;
    }*/
    findAll(){
        return new Promise((resolve,reject)=> {
            const path = config.data
            fs.readdir(path, function (err, datas)=> {
                if (err) {
                    reject(err);
                    return;
                }
                var episodes = []
                for(var i=0;i<datas.length(); i++){
                    episodes.push(JSON.parse(data[i]));
                }
                resolve(episodes)
            });
        });
    }



    /*//GET episode action
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
    */
    findBy(id){
        return new Promise((resolve,reject)=>{
            const path= config.data+"/"+id+".json";
           fs.readFile(path,"utf-8",function (err,data){
               if(err){
                   reject(err);
                   return;
               }
               resolve(JSON.parse(data));
           });

        });
    }

    /*//POST episode action
    add(object) {
        var episode = object;
        episode.id = episode.name.replace(/ /g, '') + episode.code;
        fs.writeFileSync(config.data + '/' + episode.id + '.json', JSON.stringify(episode));
        return episode;
    }*/
    add(episode){
        return new Promise((resolve,reject)=>{
           const path=config.data+"/"+episode.id+".json"
            fs.writeFile(path,Json.stringify(episode),function(err,data){
                if(err){
                    reject(err);
                    return;
                }
                resolve(episode);
            })
        });
    }

    //PUT action
    edit(id, newValues) {

    }

    //DELETE episode action
    delete(object){
        var path = config.data + "/" + object.idEp + ".json";
        if(fs.existsSync(path)){
            fs.unlinkSync(path);
            return res.sendStatus(204);
        }else {
            return res.sendStatus(404);
        }
    }

}

var repository = new Repository();
module.exports = repository;