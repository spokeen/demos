let obj = {};

let target = Object.create(obj);

console.log(obj.isPrototypeOf(target)); // true


console.log(obj.isPrototypeOf(null)); // false


// console.log(target instanceof obj); 