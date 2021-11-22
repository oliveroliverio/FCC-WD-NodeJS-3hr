const EventEmitter = require("events");
class Person extends EventEmitter {
  constructor(name) {
    // call super function, which allows you to use the 'this' property of the class
    super();
    this._name = name;
  }
  get name() {
    return this._name;
  }
}
let pedro = new Person("Pedro");
let christina = new Person("Christina");
christina.on("name", () => {
  console.log("my name is " + christina.name);
});
pedro.on("name", () => {
  console.log("my name is " + pedro.name);
});

pedro.emit("name");
christina.emit("name");
