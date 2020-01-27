var fs = require("fs");

var data = fs.readFileSync("runoob.txt");

console.log(data.toString());
console.log("程序执行结束");
