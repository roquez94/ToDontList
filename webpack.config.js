const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');


module.exports = {
    resolve: {
      fallback: {
        "fs": false,
        "tls": false,
        "net": false,
        "path": require.resolve("path-browserify"),
        "zlib": false,
        "http": false,
        "https": false,
        "stream": false,
        "crypto": false,
      } 
    },
  //target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
      plugins: [
        new NodePolyfillPlugin()
      ]
};