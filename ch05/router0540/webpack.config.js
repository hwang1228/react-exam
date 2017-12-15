var WebpackBrowserPlugin = require('webpack-browser-plugin');
var webpack = require('webpack');

module.exports = {
    devtool : 'source-map', 
    entry: __dirname + '/source/App.js', 
    output: { 
        path: __dirname + '/public', 
        filename: 'bundle.js' 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
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
    },
    plugins : [
       new webpack.BannerPlugin("Date : 2017.09.02"),
       new webpack.BannerPlugin("Author : Stephen Won"),
       new webpack.BannerPlugin("Copyright OpenSG inc."),
       new webpack.HotModuleReplacementPlugin()       
    ],
    devServer : {
        contentBase : './public',
        inline:true, 
        historyApiFallback :true,
        port : 8888,
        hot : true
    }
 };