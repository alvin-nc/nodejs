const util = require('util');

async function fn(name) {
  return 'hello world' + name;
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret("nodejs"));
});
