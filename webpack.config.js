var ES3Plugin = require("webpack-es3-plugin");
module.exports = {
    entry: "./src/main.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        filename: "./src/out/main.js",
        path: __dirname
    },
    mode: "development",
    devtool: false,
    plugins: [new ES3Plugin()]
};
