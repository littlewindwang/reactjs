var path=require('path');

module.exports={
    devtool: 'source-map',
    entry:path.resolve(__dirname,'app/main.js'),
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js',
    },

    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:'babel-loader'
                },
                exclude:/node-modules/
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader',
                    },{
                        loader:'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test:/\.scss$/,
                use:[
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },{
                        loader: "css-loader" // translates CSS into CommonJS
                    },{
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    }
};