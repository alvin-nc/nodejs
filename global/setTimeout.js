var EventEmitter = require("events").EventEmitter;

var emitter = new EventEmitter();

emitter.on("timeout", function () {
  console.log("timeout");
})

setTimeout(function() {
  emitter.emit("timeout");
}, 2000);
