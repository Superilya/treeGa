var path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
            path: './www/build',
            filename: 'main.js'
    },
    resolve: {
        root: './',
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'src']
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=es2015']
            },
        ]
    }
};
