var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '/img/[name]-[hash:8].[ext]'
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 5000,
                    name: '/font/[name]-[hash:8].[ext]'
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CleanWebpackPlugin(['build'], {
            root: './',
            verbose: true,
            dry: false,
            exclude: []
        }),
        new HtmlWebpackPlugin({
            title: 'Configuration File Management',
            template: 'src/index.ejs',
            hash: true
        }),
        //new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};