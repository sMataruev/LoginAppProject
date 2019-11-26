'use strict';
const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );


const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: "development",
    context: `${ path.resolve( __dirname ) }/src`,
    entry: './App',

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
        )


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

    watch: true
};
