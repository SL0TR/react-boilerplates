const CracoLessPlugin = require('craco-less');
const CracoEsbuildPlugin = require('craco-esbuild');
const { ProvidePlugin } = require('webpack');

module.exports = {
  webpack: {
    plugins: [
      new ProvidePlugin({
        React: 'react',
      }),
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
    {
      plugin: CracoEsbuildPlugin,
    },
  ],
};
