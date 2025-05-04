// 环境变量
const env = process.env.NODE_ENV || "development";

let dbconfig;
let redisconfig;

if (env === "development") {
  // 开发环境
  dbconfig = {
    host: "localhost",
    user: "root",
    password: "wenfu814",
    database: "myblog",
    port: 3306,
  };
  // redis
  redisconfig = {
    port: 6379,
    host: "127.0.0.1",
  };
}

if (env === "production") {
  // 生产环境
  dbconfig = {
    host: "localhost",
    user: "root",
    password: "wenfu814",
    database: "myblog",
    port: 3306,
  };
  // redis
  redisconfig = {
    port: 6379,
    host: "127.0.0.1",
  };
}

module.exports = {
  dbconfig,
  redisconfig,
};
