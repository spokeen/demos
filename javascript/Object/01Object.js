let obj = new Object();
for(let key in obj) {
    console.log(key);
}
let obj2 = new Object(null);
for(let ke in obj2) {
    console.log(ke);
}


let obj3=Object('a');

let obj4 = Object({a:3})
console.log(obj,obj2,obj3,obj4);


let o = {
    property(parameters) {}
  }

o.property();

let obj5 = {
    a: 'asdas'
}

obj5.__proto__.toString = function() {
    return 'ky'
}

let obj6 = {
    [obj5] : 'asdas'
}

console.log(obj6);