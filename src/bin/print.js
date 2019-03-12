'use strict';

function print(rules, label) {
  console.group(label);
  rules.forEach(rule => {
    console.log('・', rule);
  });
  console.groupEnd();
}
exports.print = print;
