'use strict';

class Definitions {
  /**
   * @param {Map.<string, import("eslint").Rule.RuleModule>} definitions
   */
  constructor(definitions) {
    this.definitions = definitions;
  }
  /**
   * @returns {Array.<string>} this equal to all available rules
   */
  keys() {
    return Array.from(this.definitions.keys());
  }
  /**
   * @param {string} rule
   * @returns {boolean}
   */
  isDeprecated(rule) {
    const definition = this.definitions.get(rule);
    return Boolean(definition && definition.meta && definition.meta.deprecated);
  }
  /**
   * @param {string} rule
   * @returns {boolean}
   */
  hasDefinition(rule) {
    const definition = this.definitions.get(rule);
    return Boolean(definition);
  }
}
module.exports = Definitions;
