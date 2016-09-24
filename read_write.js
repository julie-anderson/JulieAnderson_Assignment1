// Julie Anderson
// read_write.js


var fs = require('fs');

fs.readFile("Assignment1_names-1.txt", 'utf8', function(err,contents){
    contents = contents.slice(1, contents.length-1);
    var names = contents.split('","').sort();
    names.forEach(function(name){
        console.log(name);
    })
});