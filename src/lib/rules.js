// @ts-check
'use strict';

const { CLIEngine } = require('eslint');

const Definitions = require('./definitions');
const Preferences = require('./preferences');
const sort = require('./sort');

class Rules {
  /**
   * @param {string} configFile
   * @param {string} targetFile
   */
  constructor(configFile, targetFile) {
    const engine = new CLIEngine({
      configFile,
      useEslintrc: false,
    });
    // @ts-ignore, accessing property (config) that are not explicitly shown.
    const config = targetFile ? engine.getConfigForFile(targetFile) : engine.config.specificConfig;
    this.preferences = new Preferences(config.rules);
    this.current = () => sort(this.preferences.keys());
    this.definitions = new Definitions(engine.getRules());
    this.allAvailable = () => sort(this.definitions.keys());
  }
  deprecated() {
    return this.current().filter(rule => {
      return Boolean(!this.preferences.isDisabled(rule) && this.definitions.isDeprecated(rule));
    });
  }
  removed() {
    return this.current().filter(rule => {
      return Boolean(!this.definitions.hasDefinition(rule));
    });
  }
  unused() {
    return this.allAvailable().filter(rule => {
      return Boolean(!this.current().includes(rule) && this.definitions.isDeprecated(rule));
    });
  }
}

module.exports = Rules;
