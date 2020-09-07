// console.log(arguments);
// console.log(require("module").wrapper);

const calc = require("./test-module-1");

const calc1 = new calc();

console.log(calc1.add(5, 6));

const calc2 = require("./test-module-2");
console.log(calc2.add(5, 6));
