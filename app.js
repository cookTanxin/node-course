const querystring = require('querystring');
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const parseBodyData = require('./src/utils/parseBody')
const serverHandle = (req,res) => {
  const method = req.method;
  const url = req.url;
  // 请求参数
  req.query = querystring.parse(url.split('?')[1]);
  // 请求路由
  req.urlPath = req.url.split('?')[0];
  // 设置请求头信息
  res.setHeader('content-type','application/json');
  parseBodyData(req).then((bodyData) => {
    req.body = JSON.parse(bodyData);
    console.log(req.body.title)
    // 博客数据
    const blogData = handleBlogRouter(req,res);
    // 用户数据
    const userData = handleUserRouter(req,res);
    if(blogData) {
      return res.end(JSON.stringify({...blogData,env: process.env.NODE_ENV}));
    }
    if(userData) {
      return res.end(JSON.stringify({...userData,env: process.env.NODE_ENV}));
    }

    res.writeHead(404,{'Content-Type': 'text/plain'});
    res.write('404 not found')
    res.end();
  })

}

module.exports =  serverHandle;