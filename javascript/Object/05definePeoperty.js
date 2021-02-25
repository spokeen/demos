let obj = Object.defineProperty({},Symbol.for('dd'), {
    configurable:true,
    enumerable:true,
    value: '222',
    writable: true
})


for(let key in obj) {
    console.log(key); // 没有任何输出，for...in 不能遍历  Symbol 的 key
}

function myclass() {
}

var value;
Object.defineProperty(myclass.prototype, "x", {
  get() {
    return value;
  },
  set(x) {
    value = x;
  }
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // 1

console.log(a.hasOwnProperty('x')) // false ,如果定义了访问描述符，则对象上不能定义 遮蔽 原型上的属性 ；如果定义了数据描述符，则对象上可以定义 遮蔽 原型上的属性
