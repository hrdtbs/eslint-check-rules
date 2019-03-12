'use strict';

const yargs = require('yargs');
/**
 * @param {string} command ex.) --config .eslintrc.js --file ./tests/index.js
 */
function cli(command) {
  return (command ? yargs(command) : yargs)
    .option('config', {
      alias: 'c',
      choices: ['.eslintrc', '.eslintrc.js', '.eslintrc.json', '.eslintrc.yml'],
      type: 'string',
      describe: 'eslintrc file',
      default: '.eslintrc',
    })
    .option('file', {
      alias: 'f',
      choices: ['index.js'],
      type: 'string',
      describe: 'target file',
    })
    .option('show', {
      alias: 's',
      default: false,
      describe: 'show some rules',
    })
    .coerce('show', argv => {
      return argv && argv.split(',');
    })
    .option('error', {
      alias: 'e',
      default: true,
      describe: 'throw error for deprecated and removed rules in current',
    })
    .help('help').argv;
}

module.exports = cli;
