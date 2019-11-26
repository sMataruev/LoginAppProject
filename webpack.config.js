'use strict';
const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const webpack = require( 'webpack' );

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: "development",
    context: `${ path.resolve( __dirname ) }/src`,
    entry: {
        app: './App',
        serve: 'webpack-plugin-serve/client'
    },

    output: {
        path: `${ path.resolve( __dirname ) }/dist`,
        filename: "[name].js"
    },

    plugins: [
        new HtmlWebpackPlugin( {
            title: "Login App",
            template: "index.html"
        } ),
        new MiniCssExtractPlugin( {
                filename: devMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            }
        ),
        new Serve( {
            progress: false,
            compress: true,
            hmr: true,
            open: true,
            liveReload: true,
            host: '127.0.0.1',
            static: [ path.resolve( __dirname, './dist' ) ],
        } )

    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 1,
            minChunks: 2
        }
    },
    devtool: "cheap-eval-source-map",
    watch: true,

};
