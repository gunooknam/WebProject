const path = require('path');
const webpack = require('webpack');

const browserConfig = {
    entry: './react/main/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './react'),
    },
    devServer: {
        contentBase: './react/',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    cache: true,
};

const serverConfig = {
    entry: './bin/www',
    target: 'node',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname),
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: { presets: ["react-app"] }
            },
            {
                test: /\.css$/,
                use: [ 'css-loader/locals' ]
            }
        ]
    },
};

module.exports = browserConfig;