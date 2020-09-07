const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
  console.log("There is a new sale available");
});

myEmitter.on("newSale", () => {
  console.log("Customer name is Ajay");
});

myEmitter.emit("newSale");
