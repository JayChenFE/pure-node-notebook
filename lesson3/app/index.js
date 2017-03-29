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
const apiServer = require('./api-server');


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

			// //以action结尾,认为是ajax
			// if (url.match('.action')) {

			// 	let body = apiServer(url);
			// 	response.writeHead(200, 'resolve ok', {
			// 		'X-Powered-By': 'Node.js',
			// 		'Content-Type':'application/json'
			// 	});

			// 	response.end(JSON.stringify(body));

			// } else {
			// 	let body = staticServer(url);

			// 	response.writeHead(200, 'resolve ok', {
			// 		'X-Powered-By': 'Node.js'
			// 	});

			// 	response.end(body);
			// }

			// //返回的string或者buffer
			// let body = '';
			// let headers = {};
			// //以action结尾,认为是ajax
			// if (url.match('.action')) {

			// 	body = JSON.stringify(apiServer(url));
			// 	headers = {
			// 		'Content-Type': 'application/json'
			// 	};

			// 	headers = Object.assign(headers, {
			// 		'X-Powered-By': 'Node.js'
			// 	});
			// 	response.writeHead(200, 'resolve ok', headers);
			// 	response.end(body);

			// } else {
			// 	body = staticServer(url).then((body) => {

			// 		headers = Object.assign(headers, {
			// 			'X-Powered-By': 'Node.js'
			// 		});
			// 		response.writeHead(200, 'resolve ok', headers);
			// 		response.end(body);
			// 	});
			// }


			response.setHeader('X-Powered-By', 'Node.js');
			apiServer(url).then(data => {
				response.writeHead(200, 'resolve ok', {
					'Content-Type': 'application/json'
				});
				response.end(JSON.stringify(data));
			}, url => {
				staticServer(url).then(resource => {
					response.writeHead(200, 'resolve ok');
					response.end(resource);

				}, error => {
					response.writeHead(404, 'resource not found');
					response.end(`NOT FOUND ${error.stack}`);

				});
			});

		};
	}
}

module.exports = App;