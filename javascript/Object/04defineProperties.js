let obj = Object.defineProperties({}, {
    name: {
        configurable: true,
        enumerable: true,
        value: '的撒旦',
        writable: true
    },
    age: {
        configurable: false,
        enumerable: false,
        get() {
            return this.__age__;
        },
        set(value) {
            this.__age__ = value;
        }
    }
})
console.log(obj); // { name: '的撒旦' }

obj.age = 23;
console.log(obj); // { name: '的撒旦', __age__: 23 }
console.log(obj.age); // 23

for(let key in obj) {
    console.log(key); // name, __age__
}