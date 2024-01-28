//Modules
/*
Common JS - Every file is module(by default)
Module - Encapsulated Module(only share minimum)
*/
const names = require('./utils/names');
const sayHi = require('./utils/functions');

sayHi('Midhun');
sayHi(names.john);
sayHi(names.peter);
