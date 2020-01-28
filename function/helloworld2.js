function execute (somefunction, value) {
  somefunction(value);
}

execute(function (word) {
  console.log(word);
}, "hello, world");
