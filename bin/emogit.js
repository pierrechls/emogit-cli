#!/usr/bin/env node

/****************/
/*    cgi.js    */
/****************/

var path = require('path')
var program = require('commander')
var pkg = require(path.join('../package'))

/**
 * Usage.
 */

program
  .version(pkg.version)
  .description('Simple CLI to easily commit multiple files with custom message and emoji support')
  .usage('<action>')
  .parse(process.argv)

var command = program.args[0]

/**
 * Help.
 */

program.on('--help', function () {
 console.log('  Actions :')
 console.log()
 console.log('    add     add multiple untracked files in what will be committed')
 console.log('    commit  commit multiple files with an emoji and a custom message')
 console.log()
})

program.parse(process.argv)
if ((program.args.length != 1) || ( ['add', 'commit'].indexOf(command) == -1 )) return program.help()

var emogit = require(path.join('../lib'))
emogit(command)
