const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const crypto = require.resolve('crypto-browserify');
const stream = require.resolve('stream-browserify');

module.exports = composePlugins(
  withNx(),
  withReact({
    // Uncomment this line if you don't want to use SVGR
    // See: https://react-svgr.com/
    // svgr: false
  }),
  (config) => {
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`

    // Add the resolve.alias for 'crypto'
    config.resolve.alias = {
      ...config.resolve.alias,
      'crypto': crypto,
      'stream':stream,
    };

    return config;
  }
);
