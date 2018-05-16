const path = require('path');

module.exports = {
    entry: './react/a.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './react')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
};
