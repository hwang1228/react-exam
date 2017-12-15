var webpack = require('webpack');

module.exports = {
    devtool : 'source-map', 
    entry: __dirname + '/browser.js', 
    output: { 
        path: __dirname + '/public', 
        filename: 'bundle.js' 
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: 'css-loader', options: { modules: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                          plugins: (loader) => [
                            require('autoprefixer')(),
                            require('precss')()
                          ]
                        }
                    }
                ]
            }
        ],
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
 };