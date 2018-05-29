const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const browserConfig = {
    mode: 'development',
    entry: {
        main: './react/pages/main/main.js',
        category: './react/pages/category/category.js',
        movieRegister: './react/pages/movie_register/movieRegister.js',
    },
    output: {
        filename: '[name]_bundle.js',
        path: path.resolve(__dirname, './public'),
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
    mode: 'development',
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
                use: ['css-loader/locals']
            }
        ]
    },
};

module.exports = [browserConfig, serverConfig];
