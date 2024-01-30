const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
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
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
      ...htmlWebpackPluginConfig,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      // runtimeCaching: [
      //   {
      //     urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev'),
      //     handler: 'StaleWhileRevalidate',
      //     options: {
      //       cacheName: 'restaurantdb-api',
      //     },
      //   },
      //   {
      //     urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/'),
      //     handler: 'StaleWhileRevalidate',
      //     options: {
      //       cacheName: 'restaurantdb-image-api',
      //     },
      //   },
      // ],
    }),
    new CleanWebpackPlugin(),
  ],
};
