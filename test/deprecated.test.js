'use strict';

const check = require('../src/bin/check');

const { expect, assert } = require('chai');

describe('--config all-core-deprecated', () => {
  it('should throw error if the rules contain deprecated', () => {
    expect(() =>
      check({
        config: './test/sample/eslintrc.all-core-deprecated.js',
        error: true,
      })
    ).to.throw();
  });
  describe('--no-error', () => {
    it('should get deprecated rules and throw no error if the error option is false and deprecated rules exist', () => {
      const { deprecated } = check({
        config: './test/sample/eslintrc.all-core-deprecated.js',
        error: false,
      });
      assert.equal(deprecated.length, 11);
    });
  });
});
