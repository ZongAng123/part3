//引入一个包
const path = require('path');//帮助我们拼接路径

//webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
    //指定入口文件
    entry: './src/index.ts',
    //指定打包文件所在的目录
    output: {
        //指定打包后的目录
        // path: "./dist"
        // 或者
        path: path.resolve(__dirname,'dist'),
        //打包后文件的文件
        filename: "bundle.js",
    },
    //指定webpack打包时要使用的模块
    module: {
        //指定要加载的规则
        rules: [
            {
                //test指定规则生效的文件，通过正则表达式去匹配这个文件名字
                test: /.ts$/,
                //意思是我用ts-loader去处理以ts结尾的文件
                use: 'ts-loader',
                //要排除的文件
                exclude: /node_modules/,
            }
        ]
    }
}