

let val1 = 1,
val2 = '1';


console.log(Object.is(val1,val2)); // false


let obj = {
    name: 1
},
obj2 = {
    name: 1
};

console.log(Object.is(obj, obj2)); // false ，同一个对象才相等


console.log(Object.is(+0, -0)); // false
console.log(+0 === -0); // true