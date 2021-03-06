// web/webpack.config.js

const path = require('path');
const webpack = require('webpack');

const appDirectory = path.resolve(__dirname, '..');

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
  test: /\.js$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, 'index.js'),
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
    path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
    path.resolve(appDirectory, 'node_modules/react-navigation'),
    path.resolve(appDirectory, 'node_modules/react-native-drawer-layout'),
    path.resolve(appDirectory, 'node_modules/react-native-dismiss-keyboard'),
    path.resolve(appDirectory, 'node_modules/react-native-safe-area-view'),
    path.resolve(appDirectory, 'node_modules/react-native-tab-view'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // The 'react-native' preset is recommended to match React Native's packager
      presets: ['react-native'],
      // Re-write paths to import only the modules needed by the app
      plugins: ['babel-polyfill', 'react-native-web']
    }
  }
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]'
    }
  }
};

module.exports = {
  // your web-specific entry file
  entry: [
    'babel-polyfill',
    path.resolve(appDirectory, 'index.js'),
  ],

  // configures where the build ends up
  output: {
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'web'),
  },

  devServer: {
    contentBase: path.join(appDirectory, "web"),
    historyApiFallback: true
  },
  
  devtool: 'source-map',

  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
    ]
  },
  
  plugins: [
    // `process.env.NODE_ENV === 'production'` must be `true` for production
    // builds to eliminate development checks and reduce build size. You may
    // wish to include additional optimizations.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: process.env.NODE_ENV === 'production' || true
    })
  ],

  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'src': path.resolve(appDirectory, 'src'),
      'react-navigation': path.resolve(appDirectory, 'node_modules/react-navigation/src/react-navigation.js'),
    },
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: [ '.web.js', '.js' ]
  }
}