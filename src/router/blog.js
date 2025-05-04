//  blog
const {
  getListData,
  getDetailData,
  addBlogData,
  updateBlogData,
  deleteBlogData,
} = require("../controller/blog");
// resModel
const { SuccessModel, ErrorModel } = require("../model/resModel");
const handleBlogRouter = (req, res) => {
  console.log(req.urlPath);

  const method = req.method.toUpperCase();

  // 博客列表接口
  if (method === "GET" && req.urlPath === "/api/blog/list") {
    // 关键词
    const keyword = req.query.keyword || "";
    // 作者名称
    const author = req.query.author || "";
    return getListData(keyword, author).then((listData) => {
      return new SuccessModel(listData, "请求成功");
    });
  }
  // 博客详情接口
  if (method === "GET" && req.urlPath === "/api/blog/detail") {
    const id = req.query.id;
    return getDetailData(id).then((blogDetail) => {
      return new SuccessModel(blogDetail, "请求成功");
    });
  }
  // 新建一篇博客
  if (method === "POST" && req.urlPath === "/api/blog/add") {
    const bodyData = req.body;
    return addBlogData(bodyData).then((addData) => {
      return new SuccessModel(addData, "请求成功");
    });
  }
  // 更新博客
  if (method === "POST" && req.urlPath === "/api/blog/update") {
    const id = req.query.id;
    const bodyData = req.body;
    return updateBlogData(id, bodyData).then((updateData) => {
      return new SuccessModel(updateData, "请求成功");
    });
  }
  // 删除
  if (method === "POST" && req.urlPath === "/api/blog/delete") {
    const id = req.query.id;
    console.log("delete");
    console.log(id);

    return deleteBlogData(id).then((isDelete) => {
      if (isDelete) {
        return new SuccessModel(isDelete, "请求成功");
      } else {
        return new ErrorModel(isDelete, "删除失败");
      }
    });
  }
};

module.exports = handleBlogRouter;
