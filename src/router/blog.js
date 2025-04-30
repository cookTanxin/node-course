//  blog
const {getListData,getDetailData,addBlogData,updateBlogData,deleteBlogData} = require('../controller/blog')
// resModel
const {SuccessModel,ErrorModel} = require('../model/resModel')
const handleBlogRouter = (req,res) => {
    const method = req.method.toUpperCase();

    // 博客列表接口
    if(method === "GET" && req.urlPath === '/api/blog/list') {
        // 关键词
        const keyword = req.query.keyword || ''
        // 作者名称
        const author = req.query.author || ''
        const listData = getListData(keyword,author)
        return new SuccessModel(listData,'请求成功')
    }
    // 博客详情接口
    if(method === "GET" && req.urlPath === '/api/blog/detail') {
        const id = req.query.id;
        const blogDetail = getDetailData(id)
        return new SuccessModel(blogDetail,'请求成功')
    }
    // 新建一篇博客
    if(method === "POST" && req.urlPath === '/api/blog/add') {
        const bodyData = req.body
        const addData = addBlogData(bodyData)
        return new SuccessModel(addData,'请求成功')
    }
    // 更新博客
    if(method === "POST" && req.urlPath === '/api/blog/update') {
       const id = req.query.id;
       const bodyData = req.body
        const updateData = updateBlogData(id, bodyData)
        return new SuccessModel(bodyData,'请求成功')
    }
    // 删除
    if(method === "POST" && req.urlPath === '/api/blog/delete') {
        console.log('删除接口')
       const id = req.query.id;
       const bodyData = req.body
        const deleteData = deleteBlogData(id, bodyData)
        if(deleteData) {
            return new SuccessModel(bodyData,'请求成功')
        } else {
            return new ErrorModel(bodyData,'删除失败')
        }
    }
}

module.exports = handleBlogRouter