//学习Promise
//prototype =>then catch

//静态方法=> all/race/resolve/reject


//1.

// let p = new Promise((resolve, reject) => {
// 	resolve(1);

// });
// console.log(p);

// p.then(val => {

// 	console.log(`then val is ${val}`);
// });

// let p = new Promise((resolve, reject) => {


// 	setTimeout(reject, 1000, "hello");
// 	console.log('sync');
// 	// setTimeout(resolve,1000,"hello");

// 	// reject(1);
// 	// console(2);

// });
// console.log(p);

// //then可以接受两个参数,第一个参数处理resolve,第二个参数处理reject
// p.then(val => {

// 	console.log(`resolve val is ${val}`);
// }, val => {
// 	console.log(`reject val is ${val}`);
// });

// p.catch(val => {

// 	console.log(`catch val is ${val}`);
// });

var p = Promise.resolve(1);
// console.log(p);

// var another= Promise.resolve(p);
var another = Promise.resolve({
	then: (resolve,reject) => {
		// resolve(2);
		reject(2);
	}
});

// another.then(val => console.log(val));
another.catch(val => console.log(val));

console.log(another);