let proto = {
    name: 'dd',
    age:40
};

let target = Object.create(proto);

console.log(target.name);// dd


 target = Object.create(proto, {
    name: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 'xx'
    }
})

console.log(target.name)


let eee = Object.create(null);
eee.toString = toString;
console.log(eee.toString());

// let bbbb = Object.create(undefined);   报错 , 只能是 Object 或 null
// console.log(bbbb)

target = Object.create(proto);
console.log(Object.entries(target)); // 输出[],使用 Object.create 创建的对象， entries 无法遍历
