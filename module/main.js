var helloworld = require("./exportsHelloWorld.js");

helloworld.world();


var HelloObj = require("./exportsObject.js");

hello = new HelloObj();

hello.setName("alvin");

hello.sayHello();
