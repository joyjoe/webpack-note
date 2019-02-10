const path = require("path");

module.exports = {
    entry: {
        "import-css": path.resolve(__dirname, "./src/import-css.js"),
        "import-less": path.resolve(__dirname, "./src/import-less.js"),
        "import-scss": path.resolve(__dirname, "./src/import-scss.js"),
        "import-stylus": path.resolve(__dirname, "./src/import-stylus.js"),
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
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
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "stylus-loader"
                ]
            }
        ]
    }
}
