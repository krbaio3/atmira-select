const path = require('path');
const router = require('./webpack.constanst.js')();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTestPlugin = require('extract-text-webpack-plugin');

const basePath = __dirname;

const context = {
    context: path.join(basePath, router.src),
};

const exclude = {
    excludeHtml: /(node_modules|demo.html|index.html)/,
    excludeJs: /(node_modules|index.js)/,
};

const entry = {
    main: router.entryDevelop,
    // appStyles: router.appStyles,
    vendor: [
        'jquery',
        'angular',
        'bootstrap',
    ],
};
const resolve = {
    extensions: ['.ts', '.js'],
};
const output = {
    path: path.join(basePath, router.dist),
    filename: `[name].${router.namejs}`,
};
const optimize = {
    name: ['vendor', 'manifest'],
};

module.exports = {
    context: context.context,
    entry,
    output,
    resolve,
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    },
                }],
            },
            {
                test: /\.html$/,
                exclude: exclude.excludeHtml,
                loader: ['ngtemplate-loader', 'html-loader'],
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                loader: ExtractTestPlugin.extract({
                    fallback: 'style-loader',

                    use: [{
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                }),
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTestPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                    },
                }),
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=./assets/fonts/[name].[ext]',
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=./assets/fonts/[name].[ext]',
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=./assets/fonts/[name].[ext]',
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=./assets/fonts/[name].[ext]',
            },
            {
                test: /(\.(png|ico|gif|jpg|jpeg|svg)$)/,
                exclude: /node_modules/,
                loader: 'file-loader?name=./assets/img/[name].[ext]',
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: router.src,
        port: router.port,
        proxy: {
            '/api': {
                target: router.mockPort,
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'At-Select Atmira',
            filename: 'index.html',
            template: './demo/demo.html',
            hash: true,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: optimize.name,
        }),
        new ExtractTestPlugin({
            filename: '[name].css',
            disable: false,
            allChunks: true,
        }),
    ],
};