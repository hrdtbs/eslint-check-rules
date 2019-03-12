'use strict';

class Preferences {
  /**
   * @param {Object.<string, (string|number|Array)>} preferences
   */
  constructor(preferences) {
    this.preferences = preferences;
  }
  /**
   * @returns {Array.<string>} this equal to current rules
   */
  keys() {
    return Object.keys(this.preferences);
  }
  /**
   * @param {string} rule
   * @returns {boolean}
   */
  isDisabled(rule) {
    const preference = this.preferences[rule];
    return Boolean(preference === 'off');
  }
}
module.exports = Preferences;
