var path = require("path");

module.exports = {
    build: {
        env: require("./prod.env"),
        // index: path.resolve(__dirname, "../dist/index.html"),
        // assetsRoot: path.resolve(__dirname, "../dist"),
        // assetsSubDirectory: "static",
        // assetsPublicPath: "/vue-admin/",
        // productionSourceMap: true,

        // 静态打包配置
        index: path.resolve(__dirname, "../dist/index.html"),
        assetsRoot: path.resolve(__dirname, "../dist"),
        assetsSubDirectory: "static",
        assetsPublicPath: "./",
        productionSourceMap: false,

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ["js", "css"],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    // 启动的端口号
    dev: {
        env: require("./dev.env"),
        port: 8081,
        // port: 80,
        host: "localhost", // can be overwritten by process.env.HOST
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
        devtool: "cheap-module-eval-source-map",
        assetsSubDirectory: "static",
        assetsPublicPath: "/",
        //proxyTable: {},
        proxyTable: {
            "/api": {
                target: "http://192.168.10.142:8080",

                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/"
                }
            }
        },

        cssSourceMap: false,
        cacheBusting: true
    }

};