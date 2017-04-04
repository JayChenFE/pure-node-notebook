/*
 *Author JayChenFE
 *静态资源服务
 */

const fs = require('fs');
const path = require('path');

let getPath = url => {
	return path.resolve(process.cwd(), 'public', `.${url}`);
};

let staticFun = request => {
	let {
		url
	} = request;


	return new Promise((resolve, reject) => {
		if (url == '/') {
			url = '/index.html';
		}

		let _path = getPath(url);
		let body = '';
		body = fs.readFile(_path, (error, data) => {
			if (error) {
				reject(`NOT FOUND ${error.stack}`);
			}
			resolve(data);
		});
	});
};

module.exports = staticFun;