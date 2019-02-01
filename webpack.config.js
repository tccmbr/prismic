const Dotenv = require('dotenv-webpack');

module.exports = env => {
  return {
    plugins: [
      new Dotenv()
    ],
    mode: 'development',
    entry: './src/index.js',
    node: {
      fs: 'empty'
    },
    output: {
      path: '/var/www/html/prismic/public/scripts',
      filename: 'main.js'
    },
    module: {
      rules: [{ 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      }]
    }
  };
};
