/**
 * Created by chenbei on 16/2/2.
 */
/**
 * Created by chenbei on 16/2/2.
 */
'use strict'

/*webpack --config webpack.pro.js*/
var webpack = require('webpack');

module.exports = {
    entry: [
        __dirname + '/app.js'

    ],
    output:{
        path: __dirname + '/build/',
        filename: 'bundle.js',
        chunkFilename:"[id].bundle.[hash].js"
        /* publicPath: "http://cdn.example.com/build/"*/
    },
    resolve:{
        root: __dirname + '/',
        extensions:['', '.js'],
        modulesDirectories: ["node_modules", "self_modules","content"]
    },
    module:{
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            },
            {test: /\.(js)?$/, loaders: ['jsx-loader','babel'],exclude: ["node_modules","self_modules","content"]},
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {   test: /\.(eot|woff|gif|png|svg|ttf)(\?v=(\d|\.)*)*$/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    pluign:[

    ],
    devtool: 'source-map'
};
