const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
console.log(global)
module.exports = {
    mode: 'development', // production development
    entry: './index.js',
    // output: {
    // path: path.resolve(__dirname, './dist'),
    // filename: 'index_bundle.js'
    // },
    plugins: [new HtmlWebpackPlugin({
        title: 'webpack demo',
        template: 'index.html',
        time: new Date().toLocaleString(),
    })],
}