/*
 * api Server
 */

module.exports = request => {

	let {
		url,
		method,
		context
	} = request;


	let apiMap = {
		'/list.action': ['花生', '瓜子', '可乐'],
		'/user.action': ['Jay', '男', '33']
	};

	method = method.toLowerCase();

	if (method == 'get') {
		return Promise.resolve(apiMap[url]);
	} else {
		return Promise.resolve(context.body);
	}

};