/*
 *url-parser
 *处理客户端数据
 */

//request:query+body+method

module.exports = ctx => {

	let {
		url,
		method,
	} = ctx.req;
	
	let {
		reqCtx
	} = ctx;
	
	method = method.toLowerCase();
	//处理post B====socket===>S
	return Promise.resolve({
		then: (resolve, reject) => {
			
			if (method === 'post') {
				//原型链 readable stream eventEmitter
				let data = '';
				request.on('data', (chunk) => {
					data += chunk;
				}).on('end', () => {
					reqCtx.body = JSON.parse(data);
					//通知下一个流程
					resolve();
				});
			} else {
				//通知下一个流程
				resolve();
			}
		}
	});

};