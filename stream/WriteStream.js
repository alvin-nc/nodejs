var fs = require("fs");

var data = "菜鸟教程官网地址:www.runoob.com";

// 创建可读流
var writerStream = fs.createWriteStream("./output.txt");

writerStream.write(data, "UTF8");

//标记文件末尾
writerStream.end();

// 注册流事件 finish;
writerStream.on("finish", function (chunk) {
  console.log("写入完成");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");
