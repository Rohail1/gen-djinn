# generator-wrapper
It utility tool for wrapping generators for complete executiong without calling next everytime.
##Installation

`npm install gen-djinn --save`

### How to use

```javascript
    let genDjinn = require('gen-djinn'); 
    
    let genSum = function*(num1,num2) {
      let number =  yield num1;
      let number2 =  yield num2;
      let result = yield number + number2;
      return result;
    };

    let gen = genDjinn(genSum);
    
    let result  = gen(2,4);  // result = 6;
```
###Tests

  `npm test`

###Issues

Create an issue if there are any bugs. 


### For Any Queries

Feel free to contact me via [email](mailto:rohail@lumous.pk) or on my website [lumous.pk](http://lumous.pk)