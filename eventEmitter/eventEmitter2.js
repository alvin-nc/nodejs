var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter;

var listener1 = function listener1() {
  console.log("listener1 invoked");
}

var listener2 = function listener2() {
  console.log("listener2 invoked");
}

emitter.addListener("eventName", listener1);
emitter.on("eventName", listener2);

var listenerCount = emitter.listenerCount("eventName");
console.log("enentName监听器数量" + listenerCount);

emitter.emit("eventName");

emitter.removeListener("eventName", listener1);

var listenerCount = emitter.listenerCount("eventName");
console.log("enentName监听器数量" + listenerCount);

emitter.emit("eventName");

console.log("程序执行完毕");
