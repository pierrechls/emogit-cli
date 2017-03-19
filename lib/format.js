'use strict'

var path = require('path')
var emoji = require('node-emoji')
var dico = require(path.join('../lib/emoji-dico'))

module.exports = {
  emojiChoices: function (choices) {
    var _choices = choices.map( (choice) => {
      var matches = choice.match(/^(:[a-z0-9_-]+:) ([\W\w]+)$/)
      return {
        name: emoji.get(matches[1]) + '  ' + matches[2],
        value: matches[1]
      }
    })
    _choices.unshift({
      name: emoji.get(dico.others.noEmoji) + '  ' + 'no emoji',
      value: ''
    })
    return _choices
  },
  filesChoices: function (choices) {
    return choices.map( (choice) => {
      return {
        name: choice
      }
    })
  }
}
