// console.log(arguments);
// console.log(require("module").wrapper);

const calc = require("./test-module-1");

const calc1 = new calc();

console.log(calc1.add(5, 6));

const { add, subtract, multiply, divide } = require("./test-module-2");
console.log(add(5, 6));
console.log(multiply(5, 6));

//caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
