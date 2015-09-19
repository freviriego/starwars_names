/**
 * Created by freviriego on 19/9/15.
 */
var uniqueRandomArray = require ('unique-random-array');

var starWarsNames = require('./starwars-names.json');
module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
};