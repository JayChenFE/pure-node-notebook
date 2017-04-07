/*
 *Author JayChenFE
 *静态资源服务
 */

const fs = require('fs');
const path = require('path');

let getPath = url => {
	return path.resolve(process.cwd(), 'public', `.${url}`);
};

let staticFun = ctx => {
	let {
		url
	} = ctx.req;
	let {
		resCtx
	} = ctx;


	return new Promise((resolve, reject) => {

		if (url.match('.action')) {
			resolve();
		}

		if (url == '/') {
			url = '/index.html';
		}

		let _path = getPath(url);
		let body = '';
		body = fs.readFile(_path, (error, data) => {
			if (error) {
				resCtx.body = `NOT FOUND${error.stack}`;
			} else {
				resCtx.body = data;
			}
			resolve();
		});
	});
};

module.exports = staticFun;