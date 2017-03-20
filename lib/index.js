'use strict'

var path = require('path')
var git = require('simple-git')()
var prompt = require(path.join('../lib/prompt'))
var nothing = require(path.join('../lib/nothing'))

module.exports = function (action) {

  if(action === 'add') {

    git.status((err, data) => {
      if (err)
        throw err

      var files = data.files.filter( (file) => {
        return file.index === '?'
      }).map( (file) => {
        return file.path
      })

      if(files.length > 0) {
        console.log()
        prompt.selectFilesToAdd(files, (answers) => {
          if(answers.filesToAdd){
            git.add(answers.filesToAdd)
          }
        })
      } else {
        nothing('add')
      }
    })

  } else if (action === 'commit') {

    git.status((err, data) => {
      if (err)
        throw err

      var files = data.files.filter( (file) => {
        return file.index != '?'
      }).map( (file) => {
        return file.path
      })

      if(files.length > 0) {
        console.log()
        prompt.selectFilesToCommit(files, (answers) => {
          var filesToCommit = answers.filesToCommit
          if(filesToCommit){
            prompt.commit( (answers) => {
              var commitMessage = answers.emoji + ' ' + answers.message
              if(commitMessage) {
                git.commit(commitMessage, filesToCommit)
              }
            })
          }
        })
      } else {
        nothing('commit')
      }
    })

  } else if (action === 'creative') {
    const opn = require('opn')
    opn('http://www.emoji-cheat-sheet.com')
    process.exit(1)
  }

}
