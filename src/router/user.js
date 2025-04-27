const handleBlogUserRouter = (req,res) => {
    const method = req.method.toUpperCase();
    // 用户登录接口
    if(method === "POST" && req.urlPath === '/api/blog/login') {
        return {
            msg:'这个是博客登录的接口'
        }
    }

    return ''
}


module.exports = handleBlogUserRouter;