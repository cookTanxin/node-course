// 接收数据 处理参数负责接收请求、处理请求、协调业务逻辑 并返回响应数据
const userLogin = (username,password) => {
    if(!username || !password) {
        return false
    }
    if(username==='zhangsan' && password === '123456') {
        return true
    }else {
        return  false
    }
}

module.exports = {
    userLogin
}