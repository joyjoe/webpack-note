const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: "[name]-[hash:4].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin([
            "dist"
        ], {
            verbose: true,
        }),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html"),
            filename: "app.html",
            title: "使用html-webpack-plugin插件自动插入打包资源文件来生成html文件",
            chunks: [ "app" ],
            inject: "body",
            favicon: path.resolve(__dirname, "./favicon.ico"),
            meta: {
                "utf-8": {
                    "charset": "utf-8"
                },
                "viewport": "width=device-width, initial-scale=1.0",
                "X-UA-Compatible": {
                    "http-equiv": "X-UA-Compatible",
                    "content": "ie=edge"
                }
            },
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        })
    ]
}
