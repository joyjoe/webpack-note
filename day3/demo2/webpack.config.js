const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name]-[hash:4].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["./dist"]),
        new ExtractTextWebpackPlugin({
            filename: "app.css",
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: require("html-webpack-template"),
            title: "使用html-webpack-template生成html文件",
            appMountId: "myApp",
            appMountHtmlSnippet: "<p>我是通过appMountHtmlSnippet插入的内容</p>",
            appMountIds: ["gallery", "panel"],
            bodyHtmlSnippet: "<a href=\"./a.js\">我是插入到body中的a链接</a>",
            lang: "zh-CN",
            window: {
                "userName": "joy"
            },
            chunks: [ "app" ],
            meta: [
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0",
                }
            ]
        })
    ]
}
