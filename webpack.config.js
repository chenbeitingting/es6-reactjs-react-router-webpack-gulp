'use strict'

/*webpack-dev-server --hot*/
var webpack = require('webpack');


module.exports = {
    entry: [
         'webpack/hot/dev-server', // 'only' prevents reload on syntax errors
        __dirname + '/app.js'

    ],
    output:{
        path: __dirname + '/build/',
        filename: 'bundle.js',

        publicPath: '/build/'
    },
    resolve:{
        root: __dirname + '/',
        extensions:['', '.js'],
        modulesDirectories: ["node_modules", "self_modules","content"]
    },
    module:{
        loaders: [
            {test: /\.(js)?$/, loaders: ['jsx-loader','babel'],exclude: ["node_modules","self_modules","content"]},
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {test: /\.(eot|woff|gif|png|svg|ttf)(\?v=(\d|\.)*)*$/, loader: "url?limit=25000"}
        ]
    },

    devtool: 'source-map'
};
