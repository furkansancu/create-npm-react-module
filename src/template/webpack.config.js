const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode == "production";
    return {
        mode: argv.mode,
        stats: 'errors-only',
        entry: isProduction ? "./src/index.js" : ["./preview/index.js"],
        output: {
            path: path.resolve("dist"),
            filename: "index.js",
            libraryTarget: "commonjs2"
        },
        devServer: {
            static: {
              directory: path.join(__dirname, 'dist'),
            },
            historyApiFallback: true,
            liveReload: true,
            compress: true,
            port: 3003,
            open: true,
            hot: true,
        },
        plugins: !isProduction ? [new HtmlWebpackPlugin({ template: './preview/public/index.html', favicon: "./preview/public/favicon.ico" })] : null,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.s(c|a)ss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(jpe?g|gif|png|svg)$/i,
                    use: ['url-loader']
                }
            ]
        },
        optimization: {
            minimize: isProduction,
            minimizer: [ new TerserPlugin({ extractComments: false, parallel: true }) ],
        },
    }
};