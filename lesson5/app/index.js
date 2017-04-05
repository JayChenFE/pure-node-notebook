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
const urlParser = require('./url-parser');


class App {

	constructor() {

	}

	initServer() {
		//方便增加别的逻辑

		//返回一个函数
		return (request, response) => {
			let {
				method,
				url

			} = request;

			// request.context = {
			// 	body: '',
			// 	query: {},
			// 	method: 'get'
			// };

			let context = {
				req: request,
				reqCtx: {
					body: '', //post请求的数据
					query: { //处理get请求

					}
				},
				res: response,
				resCtx: {
					headers: {}, //response报文
					body: '' //返回前端的内容
				}

			};



			urlParser(context).then(() => {
				return apiServer(context);
			}).then(() => {
				return staticServer(context);
			}).then(() => {
				let body = '';
				let base = {
					'X-Powered-By': 'Node.js'
				};

				if (val instanceof Buffer) {
					body = val;
					response.writeHead(200, 'resolve ok', base);
				} else {

					body = JSON.stringify(val);
					let finalHeader = Object.assign(base, {
						'Content-Type': 'application/json'
					});
					response.writeHead(200, 'resolve ok', finalHeader);

				}
				response.end(body);

			});
			
			// urlParser(context).then(() => {
			// 	return apiServer(request);
			// }).then(val => {
			// 	if (!val) {
			// 		return staticServer(request);
			// 	} else {
			// 		return val;
			// 	}
			// }).then(val => {
			// 	let body = '';
			// 	let base = {
			// 		'X-Powered-By': 'Node.js'
			// 	};

			// 	if (val instanceof Buffer) {
			// 		body = val;
			// 		response.writeHead(200, 'resolve ok', base);
			// 	} else {

			// 		body = JSON.stringify(val);
			// 		let finalHeader = Object.assign(base, {
			// 			'Content-Type': 'application/json'
			// 		});
			// 		response.writeHead(200, 'resolve ok', finalHeader);

			// 	}
			// 	response.end(body);
			// });

		};
	}
}

module.exports = App;