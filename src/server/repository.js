var fs = require('fs');


function findAll() {}

function findById(id) {


}

function deleteEle() {}

function update() {}

function insert(episode, file, callback) {
    fs.writeFile(file, JSON.stringify(episode) , function(err) {
        var status = 0;
        if(err) {
            status = 500;
        } else {
            status = 201;
        }
        callback({episode : episode, status : status});
    });
}


exports.findAll = findAll;
exports.findById = findById;
exports.deleteEle = deleteEle;
exports.update = update;
exports.insert = insert;