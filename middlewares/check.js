module.exports = {
    //未登陆的会跳转到signin页
    checkLogin: function checkLogin(req, res, next) {
        if (!req.session.user) {
            req.flash('error', '未登录');
            return res.redirect('/signin');
        }
        next();
    },
    //已登录的返回之前的页面
    checkNotLogin: function checkNotLogin(req, res, next) {
        if (req.session.user) {
            req.flash('error', '已登录');
            return res.redirect('back');//返回之前的页面
        }
        next();
    }
};