let fun = function(a=1,c=2,...b) {
};


console.log(fun.constructor === Function); // true
console.log(fun.prototype.constructor === Object); // false 


console.log(fun.length); // 1