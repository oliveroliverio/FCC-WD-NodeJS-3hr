// require events module
// this is the class we get from requiring
const EventEmitter = require('events');

// create instance of EventEmitter
const eventEmitter = new EventEmitter();

// ------attach listener to eventEmitter object----------
// eventEmitter.on() takes two arguments, the listener to attach (in this case, the string 'tutorial'), 2nd the function executed when event occurs (in this case; console loggin a message)
// eventEmitter.on('tutorial', ()=> {
//   console.log('tutorial event occurred');
// });

// ---------run this by "node app"---------
// nothing happens, it's waiting for a emit event
eventEmitter.emit('tutorial');

// ---------If we want the arrow function to have parameters-------------

eventEmitter.on('tutorial', (num1, num2)=> {
  console.log(num1 + num2);
});

// -------------call emit method with parameters------
eventEmitter.emit('tutorial', 123,2,)

// ----------how do i create a custom object that uses events, you can inherit from event emitter class
class Person extends EventEmitter{
  constructor(name){
    // call super function, which allows you to use the 'this' property of the class
    super();
    this._name = name;
  }
  // add getters and setters
  get name(){
    return this._name;
  }
}

// -------- create new instance of class
let pedro = new Person('Pedro');
// note person extends eventEmitter class, so you can add a listener to Pedro object
pedro.on('name', ()=>{
  console.log('my name is ' + pedro.name);
});

// call emit method and pass in 'name'
pedro.emit('name')