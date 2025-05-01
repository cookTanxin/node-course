// 数据库查询
const {exec} = require('../db/index')
const getListData =  (keyword, author) => {
    // 1. 拼接 sql 语句
    let sql = `select * from blogs where 1=1 `
    if(keyword) {
        sql += `and title like '%${keyword}%' `
    }
    if(author) {
        sql += `and author = '${author}' `
    }
    sql += `order by createtime desc;`
    return exec(sql)
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