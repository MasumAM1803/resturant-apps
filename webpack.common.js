const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlWebpackPluginConfig = {
  meta: {
    viewport:
      'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
  },
  templateParameters: {
    brandName: 'Abdul Restaurant',
  },
};

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
    sw: path.resolve(__dirname, 'src/scripts/sw.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        // test: /\.css$/,
        test: /\.(s[ac]ss)$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Home',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
      ...htmlWebpackPluginConfig,
    }),
    // new HtmlWebpackPlugin({
    //   title: 'Favorite',
    //   filename: 'pages/favorite.html',
    //   template: path.resolve(__dirname, 'src/templates/pages/favorite.html'),
    //   ...htmlWebpackPluginConfig,
    // }),
    // new HtmlWebpackPlugin({
    //   title: 'About Us',
    //   filename: 'pages/about-us.html',
    //   template: path.resolve(__dirname, 'src/templates/pages/about-us.html'),
    //   ...htmlWebpackPluginConfig,
    // }),
    // new HtmlWebpackPlugin({
    //   title: 'Detail',
    //   filename: 'pages/detail.html',
    //   template: path.resolve(__dirname, 'src/templates/pages/detail.html'),
    //   ...htmlWebpackPluginConfig,
    // }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
