// 控制层 接收参数处理数据 处理请求返回响应
const {userLogin} = require('../controller/user')
const {SuccessModel, ErrorModel} = require("../model/resModel");
const handleBlogUserRouter = (req,res) => {
    const method = req.method.toUpperCase();
    // 用户登录接口
    if(method === "POST" && req.urlPath === '/api/blog/login') {
        const bodyData = req.body;
        return userLogin(bodyData.username, bodyData.password).then((isLogin) => {            
            if(isLogin) {
                return new SuccessModel('','登录成功');
            } else {
                return new ErrorModel('','登录失败');
            }
        })
    }
}


module.exports = handleBlogUserRouter;