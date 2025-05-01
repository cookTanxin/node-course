// 环境变量
const env = process.env.NODE_ENV || 'development';

let dbconfig

if(env === 'development') {
  // 开发环境
  dbconfig = {
    host: 'localhost',
    user: 'root',
    password:'wenfu814',
    database: 'myblog',
    port: 3306,
  }
}

if(env === 'production') {
  // 生产环境
  dbconfig = {
    host: 'localhost',
    user: 'root',
    password:'wenfu814',
    database: 'myblog',
    port: 3306,
  }
}

module.exports = {
    dbconfig
}