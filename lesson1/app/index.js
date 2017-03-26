/**
 * @authors JayChenFE 
 * @date    2017-03-21 11:17:13
 * @version $1.0$
 */

/**
 * 主要核心逻辑入口
 **/

const fs = require('fs');
// class App {

// 	constructor() {

// 	}

// 	initServer(request, response) {
// 		//第一个路径相对的是process.cwd();
// 		fs.readFile('./public/qq.html', 'utf8', (error, data) => {

// 			response.end(data);
// 		});
// 	}
// }

class App {

	constructor() {

	}

	initServer() {
		//方便增加别的逻辑

		//返回一个函数
		return (request, response) => {
			//第一个路径相对的是process.cwd();
			fs.readFile('./public/qq.html', 'utf8', (error, data) => {

				response.end(data);
			});
		};
	}
}

module.exports = App;