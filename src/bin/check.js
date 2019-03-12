#!/usr/bin/env node
'use strict';

const Rules = require('../lib/rules');

const check = argv => {
  const messages = {};

  const rules = new Rules(argv.config, argv.file);
  // current rules
  const currentRules = rules.current();

  if (argv.show && argv.show.includes('current') && currentRules.length > 0) {
    messages.current = currentRules;
  }
  // deprecated rules
  const deprecatedRules = rules.deprecated();
  if (deprecatedRules.length > 0) {
    messages.deprecated = deprecatedRules;
    if (argv.error) {
      // default
      throw new Error('Error: Current rules include deprecated.');
    }
  }
  // removed or not existed rules
  const removedRules = rules.removed();
  if (removedRules.length > 0) {
    messages.removed = removedRules;
    if (argv.error) {
      // default
      throw new Error('Error: Current rules include removed.');
    }
  }
  // unused rules
  const unused = rules.unused();
  if (argv.show && argv.show.includes('unused') && unused.length > 0) {
    messages.unused = unused;
  }
  return messages;
};
module.exports = check;
