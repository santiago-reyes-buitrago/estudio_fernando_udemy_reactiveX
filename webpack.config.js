const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            "@helpers/*": path.resolve(__dirname, "src/helpers/*"),
            "@constants/*": path.resolve(__dirname, "src/constants/*"),
            "@interfaces/*": path.resolve(__dirname, "src/interfaces/*"),
            "@functions/*": path.resolve(__dirname, "src/functions/*")
        },
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};