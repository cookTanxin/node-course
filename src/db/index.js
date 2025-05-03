const mysql = require('mysql');
const {dbconfig} = require('../config/index')

// 创建 mysql 链接对象
const connection = mysql.createConnection(dbconfig)

// 开始链接
connection.connect((err) => {
    if(err) {
        console.log('mysql 连接失败', err)
        return
    }
    console.log('mysql 连接成功')
})

// 执行 sql 语句
const exec = (sql) => {
    return new Promise((resolve,reject) => {
        connection.query(sql,(err,result) => {
            if(err) {                
                reject(err)
                return
            }            
            resolve(result)
        })
    })
}


// 关闭连接
const close = () => {
    connection.end((err) => {
        if(err) {
            console.log('mysql 关闭失败', err)
            return
        }
        console.log('mysql 关闭成功')
    })
}

module.exports = {
    exec,
    close
}