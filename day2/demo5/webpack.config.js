const path = require("path");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
        publicPath: "./dist/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 5000,
                    fallback: {
                        loader: "file-loader",
                        options: {
                            name: "[name]-[hash:4].[ext]",
                            outputPath: "./assets/image"
                        }
                    }
                }
            },
            {
                test: /\.html$/,
                use: "html-loader"
            }
        ]
    }
}
