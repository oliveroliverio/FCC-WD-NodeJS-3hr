# [NodeJS full 3hr tutorial](youtube.com/watch?v=RLtyhwFtXQA&t=9323s)

## Working with modules
Make custom Functions

`sumFunction.js`
```js
const sumFunction = (num1,num2) => num1 + num2;
// make sure to export it so it can be used elsewhere
module.exports = sumFunction;
```

`app.js` node app using function from elsewhere
```js
const sumFunction = require('./sumFunction');
// view the imported function
console.log(sumFunction)
// use the function
console.log(sumFunction(3,3))
```

update these later

---

## The-events-module-and-EventEmitter-Class
Here we can bring event driven programming to nodejs

`app.js`
```js
const EventEmitter = require('events');
```

- create instance of EventEmitter
```js
const eventEmitter = new EventEmitter();
```
- attach listener to eventEmitter object

```js
// eventEmitter.on() takes two arguments, the listener to attach (in this case, the string 'tutorial'), 2nd the function executed when event occurs (in this case; console loggin a message)
eventEmitter.on('tutorial', ()=> {
  console.log('tutorial event occurred');
});

// ---------run this by "node app"---------
// nothing happens, it's waiting for a emit event
eventEmitter.emit('tutorial');

```

- If we want the arrow function to have parameters
```js
eventEmitter.on('tutorial', (num1, num2)=> {
  console.log(num1 + num2);
});

// call emit method with parameters------
eventEmitter.emit('tutorial', 123,2,)
```


- Create a custom object that uses events, you can inherit from event emitter class
```js
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
```

- say we have more than one person object

`app2.js`
```js
class Person extends EventEmitter{
  constructor(name){
    // call super function, which allows you to use the 'this' property of the class
    super();
    this._name = name;
  }
  get name(){
    return this._name;
  }
}
let pedro = new Person('Pedro');
let christina = new Person('Christina');
chrstina.on('name', ()=>{
  console.log('my name is ' + christina.name)
});
pedro.on('name', ()=>{
  console.log('my name is ' + pedro.name);
});

pedro.emit('name');
christina.emit('name');
```
- These