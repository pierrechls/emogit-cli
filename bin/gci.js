#!/usr/bin/env node

var program = require('commander')
var path = require('path');

/**
 * Usage.
 */

program
  .version('1.0.0')
  .usage('[options]')
  .parse(process.argv)

var gci = require(path.join('../lib'));
gci();
