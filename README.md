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
