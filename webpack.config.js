module.exports = {
    // entry: ['babel-polyfill', './app/main.js'],
    entry: ['./app/main.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: { 
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './build',
        inline: true
    }
}