// redisClient.js
const redis = require("redis");
console.log("zhix");

// 创建客户端
const client = redis.createClient({
  url: "redis://localhost:6379", // 本地 Redis，默认端口是 6379
});

// 连接 Redis
client
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect()
  .then(() => console.log("✅ Redis 连接成功"))
  .catch(console.error);

// 设置 redis 数据
const setRedis = (key, val) => {
  return new Promise(async (resolve, reject) => {
    if (typeof val === "object") {
      key = JSON.stringify(val);
    }
    await client.set(key, val);
    resolve();
  });
};

// 获取 redis redis 数据
const getRedis = (key) => {
  return new Promise(async (resolve, reject) => {
    let value = await client.get(key);
    // 使用异常捕获
    try {
      value = JSON.parse(value);
      resolve(value);
    } catch (error) {
      resolve(value);
    }
  });
};

// 导出以便复用
module.exports = {
  client,
  setRedis,
  getRedis,
};
