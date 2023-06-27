const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/api', {
        target: "http://127.0.0.1:8090/",
        pathRewrite: {'^/api': ''},
        changeOrigin: true
    }));
};