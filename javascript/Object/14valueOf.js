let arr = [1,2,3];

console.log(arr.toString()); // 1,2,3
console.log(arr.valueOf()); //[ 1, 2, 3 ]

let bool = new Boolean('');

console.log(bool.toString()); // false
console.log(bool.valueOf()); // false

let date = new Date();
console.log(date.toString()); // Thu Feb 25 2021 20:23:06 GMT+0800 (China Standard Time)
console.log(date.valueOf()); // 1614255786578

let fun = function() {
    let a = 21;
}

console.log(fun.toString()); // false    
/**
 * function() {
    let a = 21;
}
 */
console.log(fun.valueOf()); // [Function: fun]


let num = new Number(222);
console.log(num.toString()); // 222
console.log(num.valueOf()); // 222

let obj = {name:'dd'};

console.log(obj.toString()); // [object Object]
console.log(obj.valueOf()); // { name: 'dd' }