const { IgnorePlugin } = require('webpack');
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    target: 'node',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new IgnorePlugin({ resourceRegExp: /^fsevents$/ }),
        new CopyWebpackPlugin({
            patterns: [{
                from: '**/{.*,*}',
                context: './src/template/',
                to: './template/[path][name][ext].example',
                info: { minimized: true },
            }]
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: { format: { comments: false } },
                extractComments: false
            })
        ]
    }
};