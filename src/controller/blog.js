// 数据库查询
const { exec } = require("../db/index");
const getListData = (keyword, author) => {
  // 1. 拼接 sql 语句
  let sql = `select * from blogs where 1=1 `;
  if (keyword) {
    sql += `and title like '%${keyword}%' `;
  }
  if (author) {
    sql += `and author = '${author}' `;
  }
  sql += `order by createtime desc;`;
  return exec(sql);
};

// 获取博客详情数据
const getDetailData = (id = "") => {
  const sql = `select * from blogs where id = ${id};`;
  return exec(sql).then((rows) => {
    return rows[0];
  });
};

// 创建博客
const addBlogData = (bodyData) => {
  const { title, content, author } = bodyData;
  const createtime = new Date().getTime();
  const sql = `insert into blogs (title,content,createtime,author) values('${title}','${content}','${createtime}','${author}')`;
  return exec(sql).then((insertData) => {
    return {
      id: insertData.insertId,
    };
  });
};

// 更新博客
const updateBlogData = (id, bodyData) => {
  const sql = `update blogs set title = '${bodyData.title}', content = '${bodyData.content}' where id = ${id};`;
  return exec(sql).then((rowsData) => {
    return {
      id: id,
    };
  });
};

// 删除博客
const deleteBlogData = (id) => {
  const sql = `DELETE FROM blogs WHERE id = '${id}'`;
  return exec(sql)
    .then((rowsData) => {
      return {
        id: id,
      };
    })
    .catch(() => {
      return {};
    });
};

module.exports = {
  getListData,
  getDetailData,
  addBlogData,
  updateBlogData,
  deleteBlogData,
};
