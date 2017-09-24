var path = require('path');
var webpack = require('webpack');


var devConfig = {
    entry: {
        mainjs: [__dirname + "/client/src/index/main.js"]
    },
    output: {
        path: __dirname + "/client/page/index",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名

    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
};
module.exports = devConfig;