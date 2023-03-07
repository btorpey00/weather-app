const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        renderCities: './src/modules/renderCities.js',
        addNew: './src/modules/addNew.js',
        apiActions: './src/modules/apiActions.js',
        cityFactory: './src/modules/cityFactory.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};