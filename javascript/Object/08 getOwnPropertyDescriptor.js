let obj = {
    name: 'dd'
}

let de = Object.getOwnPropertyDescriptor(obj, 'name');

console.log(de);
/**
 * { value: 'dd',
  writable: true,
  enumerable: true,
  configurable: true }
 */