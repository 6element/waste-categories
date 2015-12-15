'use strict';

var find = require('find');
var path = require('path');

var myDicMap = new Map();

var files = find.fileSync(/\.json$/, './dictionaries');

files.forEach(function(file){
    var dic = require('./' + file); // otherwise require won't work
    var reference = path.basename(file, '.json');

    dic.forEach(function(item){ // replace the item path by a complete path that depends on the context
        item.path = path.relative('.', path.join(path.dirname(file), 'svg', item.path))
    });
    myDicMap.set(reference, dic);
});

module.exports = myDicMap;
