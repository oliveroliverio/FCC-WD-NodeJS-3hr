const sum = (num1, num2) => num1 + num2;
// make sure to export it so it can be used elsewhere
// module.exports = sum;


// 20211121 5:51pm now add more stuff
const PI = 3.14;
class SomeMathObject{
  constructor(){
    console.log('object created')
  }
}

// 20211121 5:52pm now to add to exports, add as properties to export object

// module.exports.sum=sum;
// module.exports.PI=PI;
// module.exports.SomeMathObject=SomeMathObject;

// now go to the app.js and console log these

// ----------cleaner way of exporting above-----------
module.exports = {sum:sum, PI:PI, SomeMathObject:SomeMathObject};