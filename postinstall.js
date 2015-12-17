'use strict';

var fs = require('fs');
var find = require('find');
var path = require('path');

var localDicPath = path.join(__dirname, 'dictionaries');
var files = find.fileSync(/\.json$/, localDicPath);

var myDic = {};

files.forEach(function(file){
    var dic = require(file) || require('./' + file);
    var reference = path.basename(file, '.json');

    dic.forEach(function(item){
    	item.path = path.join('dictionaries', reference, item.path);
    });

    myDic[reference] = dic;
});

fs.writeFile('index.json', JSON.stringify(myDic));
