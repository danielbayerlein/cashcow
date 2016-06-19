const path = require('path');

module.exports = env => {
  return {
    entry: path.resolve(__dirname, '../public/javascripts/client.js'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../dist'),
      pathinfo: !env.prod,
    },
    context: path.resolve(__dirname, '../public/javascripts'),
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    module: {
      loaders: [
        { test: /\.js(x)$/, loader: 'babel!eslint', exclude: /node_modules/ },
        { test: /\.css$/, loader: 'style!css' },
      ],
    },
  };
};
