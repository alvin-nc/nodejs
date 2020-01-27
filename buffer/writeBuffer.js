var buf = Buffer.alloc(256);

var len = buf.write("www.runoob.com", 10, 10);

console.log("写入的字节数 ： " + len);

console.log(buf.toString());

console.log(buf.toString("utf-8", 0, 20));
