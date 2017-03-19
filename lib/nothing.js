'use strict'

var path = require('path')
var emoji = require('node-emoji')
var dico = require(path.join('../lib/dico'))

module.exports = function (action) {
    console.log()
    console.log(    emoji.get(dico.others.nothing) + '  ' + 'nothing to ' + action )
    console.log()
}
