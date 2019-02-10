const path = require("path");
const VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;

module.exports = {
    entry: {
        app: path.resolve(__dirname, "./src")
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader"
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
