const parseBodyData = (req) => {
    return new Promise((resolve,reject) => {
        let postData = ''
        if(req.method.toUpperCase() !=='POST') {
            return resolve('')
        }
        // 判断是否已 json格式传递过来
        if(req.headers['content-type'] !=='application/json') {
            console.log('here*****')
            console.log(req.headers)
            return reject('')
        }
        // 监听方法
        req.on('data',(chunk) => {
            postData += chunk
        })
        req.on('end',() => {
            if(!postData) {
                return reject('')
            }
            resolve(postData)
        })
    })
}

module.exports =  parseBodyData