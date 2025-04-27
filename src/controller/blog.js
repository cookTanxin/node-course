// 获取列表数据
const {SuccessModel} = require("../model/resModel");
const getListData =  (keyword, author) => {
    return [
        {id:1,name:'zhangsan',author:'lisi'},
        {id:2,name:'wangwu',author: 'lisi'}
    ]
}

// 获取博客详情数据
const getDetailData = (id = '') => {
    return {
        title:'博客标题',
        content:'博客内容',
        createTime: new Date(),
    }
}

// 创建博客
const addBlogData = (bodyData) => {
    const {title,content,time} = bodyData
    return {
        title:title,
        content:content,
        time:time,
    }
}

// 更新博客
const updateBlogData = (id, bodyData) => {
    console.log('id',id)
    const {title,content,time} = bodyData
    return {
        title:title,
        content:content,
        time:time,
    }
}

// 删除博客
const deleteBlogData = (id) => {
    console.log('id',id)
    return false
}



module.exports = {
    getListData,
    getDetailData,
    addBlogData,
    updateBlogData,
    deleteBlogData
}