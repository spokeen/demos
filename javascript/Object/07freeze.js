let obj = {
    name: 'dd',
    age: 43
};

let target = Object.freeze(obj);

console.log(target);//{ name: 'dd', age: 43 }

delete obj.name;
console.log(target);//{ name: 'dd', age: 43 }

target.sex = '男';
console.log(target);//{ name: 'dd', age: 43 }


// Object.defineProperty(target, 'name', { // 报错
//     enumerable: false,
//     configurable: true,
//     value: 'xx',
//     writable: true
// })


// target.__proto__ = {}; 报错 is not extensible
console.log(target.hasOwnProperty('name')); // true