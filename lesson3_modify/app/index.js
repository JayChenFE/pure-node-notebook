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


			apiServer(url).then(val => {
				if (!val) {
					return staticServer(url);
				} else {
					return val;
				}
			}).then(val => {
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
		};
	}
}

module.exports = App;