const handleBlogRouter = (req,res) => {
    const method = req.method.toUpperCase();

    // 博客列表接口
    if(method === "GET" && req.urlPath === '/api/blog/list') {
        return {
            msg:'这个博客列表接口'
        }
    }
    // 博客详情接口
    if(method === "POST" && req.urlPath === '/api/blog/detail') {
        return {
            msg:'这个是博客详情接口'
        }
    }
    // 新建一篇博客
    if(method === "POST" && req.urlPath === '/api/blog/add') {
        return {
            msg:'这个是博客新建接口'
        }
    }
    res.writeHead(404,{'Content-Type': 'text/plain'});
    res.write('404 not found')
    res.end();
}

module.exports = handleBlogRouter