var path = require('path');
var webpack = require('webpack');
var entry={
    menu: [__dirname + "/client/src/menu/main.js"],
    index: [__dirname + "/client/src/index/main.js"]
}

var devConfig = {
    entry:entry,
    output: {
        path: path.resolve(__dirname, "client/page"),//打包后的文件存放的地方
        filename: "[name].bundle.js"//打包后输出文件的文件名

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
        // ,loaders: [
        //     { test: /\.css$/, loader: 'style-loader!css-loader' },
        //     { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
        //     { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
        //     { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
        //     { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        // ]
    }
};
module.exports = devConfig;