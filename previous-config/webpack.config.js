const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const extractTextWebpackPlugin = require("extract-text-webpack-plugin");
const InlineChunkManifestHtmlWebpackPlugin = require('inline-chunk-manifest-html-webpack-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

const CSSLoaderConfig = {
    // modules: true,
    // context: path.resolve(__dirname, "./src"),
    // localIdentName: '[name]__[local]__[hash:5]',
    // sourceMap: true
}

/* eslint-disable */
function createCSSLoaderConfig(sourceMap, num) {
    return {
        modules: true,
        context: path.resolve(__dirname, "./src"),
        localIdentName: '[name]__[local]__[hash:5]',
        sourceMap,
        importLoaders: num
    }
}
/* eslint-enable */

const StyleLoaderConfig = {
    insertInto: "#app"
}

module.exports = {
    entry: {
        // "app": "./src/app.js",
        // "pageA": "./src/pageA.js",
        // "pageB": "./src/pageB.js",
        "pageC": "./src/pageC.js",
        "vendor": ["underscore", "jquery"],
    },
    output: {
        // publicPath: "/dist",
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].[hash:4].[chunkhash:4].js"
    },
    module: {
        rules: [
            // js
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            "presets": ["env"],
                            "plugins": [
                                "transform-runtime"
                            ]
                        }
                    }
                ],
                exclude: /node_modules/
            },
            // css
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                        options: StyleLoaderConfig
                    },
                    {
                        loader: "css-loader",
                        options: CSSLoaderConfig
                    }
                ]
            },
            // less
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader",
                        options: StyleLoaderConfig
                    },
                    {
                        loader: "css-loader",
                        options: CSSLoaderConfig
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            // scss
            {
                test: /\.scss$/,
                use: extractTextWebpackPlugin.extract({
                    fallback: {
                        loader: "style-loader",
                        options: StyleLoaderConfig
                    },
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 2
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: [
                                    require("postcss-sprites")({
                                        spritePath: "./dist",
                                        filterBy: (image)=>{
                                            if(image.path.indexOf("avatar") !== -1){
                                                return Promise.resolve();
                                            }
                                            return Promise.reject();
                                        }
                                    })
                                ]
                            }
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                })
            },
            // image
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                use: [
                    // {
                    //     loader: "file-loader",
                    //     options: {
                    //         // publicPath: "./dist",
                    //         name: "[hash:4].[ext]",
                    //         outputPath: "./assets"
                    //     }
                    // },
                    {
                        loader: "url-loader",
                        options: {
                            limit: 1000,
                            fallback: {
                                loader: "file-loader",
                                options: {
                                    name: "[name]-[hash:4].[ext]",
                                    outputPath: "./assets"
                                }
                            }
                        }
                    },
                    {
                        loader: "img-loader",
                        options: {
                            plugins: [
                                require("imagemin-mozjpeg")({
                                    quality: 60
                                    // progressive: true,
                                    // arithmetic: false
                                })
                            ]
                        }
                    }
                ]
            },
            // fonts
            {
                test: /\.(eot|svg|ttf|woff2?)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 3000,
                            fallback: {
                                loader: "file-loader",
                                options: {
                                    name: "[name]-[hash:4].[ext]",
                                    outputPath: "./assets"
                                }
                            }
                        }
                    }
                ]
            },
            // html
            // {
            //     enforce: "pre",
            //     test: /\.(html)$/,
            //     use: [
            //         {
            //             loader: "html-loader",
            //             options: {
            //                 attrs: ["img:src", "img:data-src"]
            //             }
            //         }
            //     ]
            // }
        ]
    },
    // externals: {
    //     jquery: "jQuery",
    //     underscore: "_"
    // },
    plugins: [
        new cleanWebpackPlugin([path.resolve(__dirname, "./dist")]),
        new webpack.NamedChunksPlugin(),
        new webpack.NamedModulesPlugin(),
        // providePlugin
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            _: "underscore",
        }),
        // new webpack.optimize.UglifyJsPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "common",
        //     chunks: ["pageA", "pageB"],
        //     filename: "common.page.js"
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor1",
        //     chunks: ["pageA", "vendor"],
        //     filename: "common.vendor1.js"
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor2",
        //     chunks: ["pageB", "vendor"],
        //     filename: "common.vendor2.js"
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor3",
        //     chunks: ["pageC", "vendor"],
        //     filename: "common.vendor3.js"
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     allchunks: true,
        //     filename: "common.js"
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.vendor.js"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            filename: "webpack.manifest.js"
        }),
        new extractTextWebpackPlugin({
            filename: "[id]-[name]-[chunkhash:4]-[hash:4].css"
        }),
        new htmlWebpackPlugin({
            title: "用webpack3测试babel编译es6高级语法",
            template: "./index.html",
            inject: "body",
            chunks: ["pageC"],
            excludeChunks: ["vendor", "manifest"]
            // excludeChunks: ["vendor"]
        }),
        new InlineChunkManifestHtmlWebpackPlugin({
            filename: "webpack.manifest.js"
        }),
        // new BundleAnalyzerPlugin({
        //     analyzerPort: 8080
        // }),
    ]
}
