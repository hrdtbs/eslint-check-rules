'use strict';

/**
 * Sort rule ids alphabetically, and plugins are behind
 * @param {Array.<string>} rules
 * @returns {Array.<string>} Sorted rules
 */
const sort = rules => {
  const plugins = [];
  const cores = [];
  rules.forEach(rule => {
    if (rule.includes('/')) {
      plugins.push(rule);
    } else {
      cores.push(rule);
    }
  });
  return [...cores.sort(), ...plugins.sort()];
};
module.exports = sort;
