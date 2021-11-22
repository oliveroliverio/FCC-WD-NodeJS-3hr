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

eventEmitter.on('tutorial', ()=> {
  console.log('tutorial event occurred');
});