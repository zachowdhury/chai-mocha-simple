const HtmlWebPackPlugin = require ( "html-webpack-plugin");
const CleanWebpackPlugin = require ('clean-webpack-plugin');
const path = require('path');

module.exports = {

    entry:'./src/index.js',
    output:{
      filename:'main.js',
      path: path.resolve(__dirname,'dist')
    },
  
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.html$/,
            use:[{
                loader:"html-loader"

                }]
        },
        {
          test: /\.css$/,
          use:[
            'style-loader',
            'css-loader'
          ]
        },{
          test:/\.(png|svg|jpg|gif|ico)$/,
          use:[
            'file-loader'
          ]
        }

      ]
    },
    devServer:{
      historyApiFallback:true,

    },
    plugins:[
      new CleanWebpackPlugin(['dist']),
        new HtmlWebPackPlugin({
            template:"./src/index.html",
            filename:"./index.html"
        })
    ]
  };