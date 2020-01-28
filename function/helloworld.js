function say (word) {
  console.log(word);
}

function execute (somefunction, value) {
  somefunction(value);
}

execute(say, "hello, world");
