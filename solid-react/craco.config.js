const CracoLessPlugin = require('craco-less');
const CracoEsbuildPlugin = require('craco-esbuild');

module.exports = {
  plugins: [
    {
      plugin: CracoEsbuildPlugin,
    },
    {
      plugin: CracoLessPlugin,
    },
  ],
};
