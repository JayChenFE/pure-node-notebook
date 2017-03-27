/**
 * @authors JayChenFE 
 * @date    2017-03-21 11:17:13
 * @version $1.0$
 */

/**
 * 主要核心逻辑入口
 **/

const fs = require('fs');
const path = require('path');
const staticServer = require('./static-server');


class App {

	constructor() {

	}

	initServer() {
		//方便增加别的逻辑

		//返回一个函数
		return (request, response) => {
			let {
				url
			} = request;



			let body = staticServer(url);

			response.writeHead(200, 'resolve ok', {
				'X-Powered-By': 'Node.js'
			});

			response.end(body);
			// const staticPrefix = path.resolve(process.cwd(), 'public');

			// let staticFun = url => {
			// 	if (url == '/') {
			// 		url = '/index.html';
			// 	}

			// 	let _path = getPath(url);
			// 	// fs.readFile(_path, 'binary', (error, data) => {
			// 	// 	if (error) {
			// 	// 		data="NOT FOUND";
			// 	// 	}
			// 	// 	response.end(data,'binary');
			// 	// });
			// 	fs.readFile(_path, (error, data) => {
			// 		if (error) {
			// 			data = `NOT FOUND ${error.stack}`;
			// 		}
			// 		response.end(data);
			// 	});
			// };

			// staticFun(url);

			// if (url == '/css/index.css') {

			// 	fs.readFile('./public/css/index.css', 'utf-8', (error, data) => {
			// 		response.end(data);
			// 	});

			// }

			// if (url == '/js/index.js') {

			// 	fs.readFile('./public/js/index.js', 'utf-8', (error, data) => {
			// 		response.end(data);
			// 	});

			// }

			// if (url == '/') {
			// 	//第一个路径相对的是process.cwd();
			// 	fs.readFile('./public/index.html', 'utf-8', (error, data) => {

			// 		response.end(data);
			// 	});
			// }
		};
	}
}

module.exports = App;