module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: __dirname + '/dist'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ]
      }
  };