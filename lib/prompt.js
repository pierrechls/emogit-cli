'use strict'

var path = require('path')
var inquirer = require('inquirer')
var format = require(path.join('../lib/format'))
var dico = require(path.join('../lib/dico'))

module.exports = {
  selectFilesToAdd: function (files, callback) {
    inquirer.prompt({
      type: 'checkbox',
      message: 'Select untracked file(s) to add',
      name: 'filesToAdd',
      choices: format.filesChoices(files),
      validate: function( answer ) {
        if ( answer.length < 1 ) {
          return 'You must choose at least one file'
        }
        return true
      }
    }, (answers) => {
      callback(answers)
    })
  },
  selectFilesToCommit: function (files, callback) {
    inquirer.prompt({
      type: 'checkbox',
      message: 'Select file(s) to commit',
      name: 'filesToCommit',
      choices: format.filesChoices(files),
      validate: function( answer ) {
        if ( answer.length < 1 ) {
          return 'You must choose at least one file'
        }
        return true
      }
    }, (answers) => {
      callback(answers)
    })
  },
  commit: function (callback) {
    inquirer.prompt([{
      type: 'list',
      name: 'emoji',
      message: 'Choose an awesome emoji',
      choices: format.emojiChoices(dico.choices)
    }, {
      type: 'input',
      name: 'message',
      message: 'Type your commit message',
      validate: function (val) {
        return /\w/.test(val) || 'You must enter something'
      }
    }], function (answers) {
      callback(answers)
    })
  }
}
