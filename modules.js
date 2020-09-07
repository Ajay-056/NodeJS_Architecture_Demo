// console.log(arguments);
// console.log(require("module").wrapper);

const calc = require("./test-module-1");

const calc1 = new calc();

console.log(calc1.add(5, 6));
