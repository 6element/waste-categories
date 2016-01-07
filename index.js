'use strict';

var path = require('path');

var dictionaries = require('./index.json');

Object.keys(dictionaries).forEach(function(key){
	
	var dic = dictionaries[key];

	dic.forEach(function(item){
    	item.path = path.join(path.relative('.', __dirname), item.path); // adapt the path to calling context
	});
	
});

module.exports = dictionaries;
