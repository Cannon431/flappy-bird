module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/src/js/dist'
    }
};
