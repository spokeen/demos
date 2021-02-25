let proto = {
    name: 'dd'
};

let obj = Object.create(proto);
obj.age = 30;

console.log(Object.entries(obj)); // [ [ 'age', 30 ] ]


for(let key in obj) {
    console.log(key); // age, name
}