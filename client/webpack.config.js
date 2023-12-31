const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: true,
        chunks: ['main'],
        filename: 'index.html',
      }),

      new WebpackPwaManifest({
        name: 'Just Another Text Editor',
        short_name: 'Jate',
        description: 'An application for a live text editor.',
        background_color: '#ffffff',
        crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
        icons: [
          {
            src: path.resolve('./src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          },
          {
            src: path.resolve('./src/images/logo.png'),
            size: '1024x1024', // you can also use the specifications pattern
          },
          {
            src: path.resolve('./src/images/logo.png'),
            size: '1024x1024',
            purpose: 'maskable',
          },
    ],
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'sw.js',
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },

        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  };
};
