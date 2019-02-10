const path = require("path");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "./src")
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
                test: /\.(jpg|jpeg|gif|png)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 3000,
                            fallback: {
                                loader: "file-loader",
                                options: {
                                    name: "[name]-[hash:4].[ext]",
                                    outputPath: "./assets/images"
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(svg|eot|ttf|woff2?)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 5000,
                            fallback: {
                                loader: "file-loader",
                                options: {
                                    name: "[name]-[hash:4].[ext]",
                                    outputPath: "./assets/fonts"
                                }
                            }
                        }
                    }
                ]
            }
        ]
    }
}
