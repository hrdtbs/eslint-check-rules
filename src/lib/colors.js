'use strict';

const color = col => str => `\u001b[${col}m${str}\u001b[0m`;
const text = {
  black: color('30'),
  red: color('31'),
  green: color('32'),
  yellow: color('33'),
  blue: color('34'),
  magenta: color('35'),
  cyan: color('36'),
  white: color('37'),
};
const bg = {
  black: color('40'),
  red: color('41'),
  green: color('42'),
  yellow: color('43'),
  blue: color('44'),
  magenta: color('45'),
  cyan: color('46'),
  white: color('47'),
};

exports.text = text;
exports.bg = bg;
