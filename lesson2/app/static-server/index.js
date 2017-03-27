/*
 *Author JayChenFE
 *静态资源服务
 */

const fs = require('fs');
const path = require('path');

let getPath = url => {
	return path.resolve(process.cwd(), 'public', `.${url}`);
};

let staticFun = url => {

	let map = {
		"/": "/index.html",
		"/about": "/about.html",
		"/list": "/list.html"
	};

	// if (url == '/') {
	// 	url = '/index.html';
	// }

	url = map[url] || url;

	let _path = getPath(url);
	let body = '';
	// fs.readFile(_path, 'binary', (error, data) => {
	// 	if (error) {
	// 		data="NOT FOUND";
	// 	}
	// 	response.end(data,'binary');
	// });
	try {
		body = fs.readFileSync(_path);
	} catch (error) {
		body = `NOT FOUND ${error.stack}`;
	}
	return body;
	// fs.readFile(_path, (error, data) => {
	// 	if (error) {
	// 		data = `NOT FOUND ${error.stack}`;
	// 	}
	// 	response.end(data);
	// });
};

module.exports = staticFun;