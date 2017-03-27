/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-27 21:25:54
 * @version $Id$
 */

var fs = require('fs');
var a = fs.readFileSync('./img/timg.jpg','base64');
console.log(a);