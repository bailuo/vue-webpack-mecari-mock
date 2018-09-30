'use strict'

const path = require('path');

module.exports = {
    dev: {
        assetsSubDirectory: 'assets',
        assetsPublicPath: '/src',
        // proxy to call apis, in this case, we just set it to the given api
        proxyTable: {},
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 7788,
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false,
        useEslint: false,
        showEslintErrorsInOverlay: false,
        devtool: 'cheap-module-eval-source-map',
        cacheBusting: true,
        cssSourceMap: true // source map is required
    },
    // build production env，we wont use it in this project, but we keep it for now
    build: {
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        devtool: '#source-map',
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    }
}