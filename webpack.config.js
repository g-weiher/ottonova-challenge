const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/app.js",
    mode: "production",
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            { from: "static", to: "./" },
          ],
        }),
        new MiniCssExtractPlugin(),
      ],
};
