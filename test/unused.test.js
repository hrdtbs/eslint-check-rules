'use strict';

const check = require('../src/bin/check');

const { assert } = require('chai');

describe('--config only-core-recommended', () => {
  const outputs = check({
    config: './test/sample/eslintrc.only-core-recommended.js',
  });
  it('should not get any deprecated rules, because eslint:recommended explicitly sets the deprecated rules to off but the output rules are removed whose preference is off', () => {
    const { deprecated } = outputs;
    assert.equal(deprecated, undefined);
  });
  it('should not get any removed rules, because eslint:recommended not included removed and no-exist rules', () => {
    const { removed } = outputs;
    assert.equal(removed, undefined);
  });
  describe('--show unused', () => {
    it('should not get any unused rules, because eslint:recommended is explicitly set to off for rules not used', () => {
      const { unused } = check({
        config: './test/sample/eslintrc.only-core-recommended.js',
        show: ['unused'],
      });
      assert.equal(unused, undefined);
    });
  });
});
