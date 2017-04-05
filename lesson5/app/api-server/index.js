/*
 * api Server
 */

module.exports = ctx => {

	let {
		url,
		method,
	} = ctx.request;

	let {
		resCtx
	} = ctx;

	let apiMap = {
		'/list.action': ['花生', '瓜子', '可乐'],
		'/user.action': ['Jay', '男', '33']
	};

	method = method.toLowerCase();

	return Promise.resolve({
		then: (resolve, reject) => {

			if (method == 'get') {
				resCtx.body = apiMap[url];
			} else {
				resCtx.body = resCtx.body;
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