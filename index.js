#!/usr/bin/env node --harmony
var program = require('commander');
var chalk = require('chalk');
// var YAML = require('yamljs');
var YAML = require('node-yaml');

program
 .arguments('<file>')
 .option('-e, --endpoint <endpoint>', 'The endpoint to generate code for')
 .action(function(file) {
   console.log(chalk.black('endpoint: %s file: %s'),
       program.endpoint, file);

    generate(file, program.endpoint);
 })
 .parse(process.argv);

 
function generate(file, endpoint)
{
  // var specs = YAML.load(file);
  var specs = YAML.readSync(file);
  console.log(specs);
}