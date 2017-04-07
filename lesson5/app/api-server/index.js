/*
 * api Server
 */

module.exports = ctx => {

	let {
		url,
		method
	} = ctx.req;

	let {
		resCtx,
		reqCtx,
		res
	} = ctx;

	let apiMap = {
		'/list.action': ['花生', '瓜子', '可乐'],
		'/user.action': ['Jay', '男', '33']
	};

	method = method.toLowerCase();

	return Promise.resolve({
		then: (resolve, reject) => {

			if (url.match('action')) {
				if (method == 'get') {
					resCtx.body = JSON.stringify(apiMap[url]);
				} else {
					resCtx.body = JSON.stringify(reqCtx.body);
				}

				resCtx.headers = Object.assign(resCtx.headers, {
					'Content-Type': 'application/json'
				});
				// res.setHeader('Content-Type','application/json');
			}
			resolve();
		}
	});

	// if (method == 'get') {
	// 	resCtx.body = apiMap[url];
	// } else {
	// 	resCtx.body = resCtx.body;
	// }
	// return Promise.resolve();

};