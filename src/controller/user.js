const {exec} = require('../db/index');
// 接收数据 处理参数负责接收请求、处理请求、协调业务逻辑 并返回响应数据
const userLogin = (username,password) => {
    if(!username || !password) {
        return false
    }    
    const sql = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;
    return exec(sql).then((rowData) => {
        if(rowData.length>0) {
            return true
        } else {
            return false
        }
    })
}

module.exports = {
    userLogin
}