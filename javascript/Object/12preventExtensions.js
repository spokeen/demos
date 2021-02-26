

let obj = {
    name: 'dd',
    age: 20
};

Object.preventExtensions(obj);
obj.name = 'xx'
obj.xx = 'ddd';
console.log(obj); // { name: 'xx', age: 20 }