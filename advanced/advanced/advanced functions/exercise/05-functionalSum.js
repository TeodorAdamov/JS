function add(num1) {
    

    const inner = function(num2) {
        num1 += num2;
        return inner;
    }
   // inner.toString = function () {
      //  return num1
   // }
    
    return inner;
    
}

console.log(add(1)(6)(-3)())

