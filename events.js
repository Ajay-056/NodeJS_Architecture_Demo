const EventEmitter = require("events");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There is a new sale available");
});

myEmitter.on("newSale", () => {
  console.log("Customer name is Ajay");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are ${stock} items available in the stock.`);
});

myEmitter.emit("newSale", 56);
