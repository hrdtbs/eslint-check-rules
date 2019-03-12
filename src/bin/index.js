#!/usr/bin/env node
'use strict';

const check = require('./check');

const cli = require('../lib/cli');

const argv = cli();

const messages = check(argv);

console.log(messages);
