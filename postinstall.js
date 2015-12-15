'use strict';

var fs = require('fs');
var find = require('find');
var path = require('path');

var files = find.fileSync(/\.json$/, path.join(__dirname, 'dictionaries'));

var myDic = {};

files.forEach(function(file){
    var dic = require(file) || require('./' + file);
    var reference = path.basename(file, '.json');

    dic.forEach(function(item){ // replace the item path by a complete path that depends on the context
        item.path = path.join('node_modules', 'waste-categories', path.dirname(file), 'svg', item.path);
    });
    myDic[reference] = dic;
});

fs.writeFile('index.json', JSON.stringify(myDic));
