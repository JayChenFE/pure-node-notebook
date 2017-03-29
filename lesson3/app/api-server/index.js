/*
 * api Server
 */

module.exports = url => {

	// return ['hello','first','ajax'];

	let apiMap = {
		'/list.action': ['花生', '瓜子', '可乐'],
		'/user.action': ['Jay', '男', '33']
	};

	return new Promise((resolve, reject) => {
		if (url in apiMap) {
			resolve(apiMap[url]);

		} else {
			reject(url);
		}
	});
};