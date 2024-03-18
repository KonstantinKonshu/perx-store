const path  = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require("dotenv-webpack")

require('dotenv').config()

module.exports = (_env, argv) => {
  const isProduction = argv.mode === "production";
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.[chunkhash].js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: "ts-loader",
        },
        {
          test: /\.(s[ac]|c)ss$/,
          exclude: /node_modules/,
          use: [ 
            isProduction ? MiniCssExtractPlugin.loader : "style-loader", 
            "css-loader", 
            { 
              loader: "sass-loader",  
              options: {
                additionalData: '@import "@shared/styles/index.scss";',
              }
            }
          ]
        },
        {
          test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './public/index.html')
     }),
      new MiniCssExtractPlugin(),
      new Dotenv()
    ],
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
      alias: {
        '@public': path.resolve(__dirname, './public'),
        '@app': path.resolve(__dirname, "./src/app"),
        '@pages': path.resolve(__dirname, "./src/pages"),
        '@shared': path.resolve(__dirname, "./src/shared"),
        '@entities': path.resolve(__dirname, "./src/entities"),
        '@widgets': path.resolve(__dirname, "./src/widgets"),
        '@features': path.resolve(__dirname, "./src/features")
      }
    },
    devServer: {
      hot: true,
      port: process.env.PORT,
    },
}};
