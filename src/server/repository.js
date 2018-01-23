var fs = require('fs');


function findall() { }

function findById(id) {}

function deleteEle() {}

function update() {}

function insert(episode, file) {
    fs.writeFile(file, JSON.stringify(episode) , function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

exports.findall = findall();
exports.findById = findById();
exports.deleteEle = deleteEle();
exports.update = update();
exports.insert = insert();