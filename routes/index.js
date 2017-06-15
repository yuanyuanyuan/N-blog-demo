module.exports = function (app) {
    //先确认从http的get请求获取
    app.get('/', function (req, res) {
        res.redirect('/posts');
    });
    //然后再根据get请求访问的路径来匹配不同的路由
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/posts', require('./posts'));
    // 404 page
    app.use(function (req, res) {
        if (!res.headersSent) {
            res.status(404).render('404');
        }
    });
};