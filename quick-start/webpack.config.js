const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require("path");
const mode = process.env.webpack_mode || "development";

module.exports = {
    mode,
    entry: {
        app: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name]-[hash:4].js",
        publicPath: "/",
        libraryTarget: "umd",
        library: "webpack4Demo"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                    }
                ],
                exclude: /node_modules/,
                // sideEffects: false
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            fallback: {
                                loader: "file-loader",
                                options: {
                                    name: "[name]-[chunkhash:4].[ext]",
                                    outputPath: "./assets" 
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin([
            path.resolve(__dirname, "./dist")
        ]),
        new htmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "./index.html"),
            title: "使用webpack4进行构建",
            chunks: ["app"]
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                ecma: 8
            }
        })
    ],
    optimization: {
        // minimize: false
        minimize: true,
    }
}
