let obj = {
    name: 'dd'
};

console.log(obj.propertyIsEnumerable('name')); // true
console.log(obj.propertyIsEnumerable('toString')); // false