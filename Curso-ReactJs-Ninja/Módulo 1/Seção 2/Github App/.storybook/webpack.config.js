module.exports = async ({ config }) => console.dir(config.plugins, { depth: null }) || config;const path = require('path');
// your app's webpack.config.js
const custom = require('../webpack/webpack.dev.config.js');

module.exports = async ({ config, mode }) => {
  return { ...config, module: { ...config.module, rules: custom.module.rules } };
};