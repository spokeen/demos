let target = {
    name: 'dd',
    age: 20,
    set wudi(a) {
        console.log('优秀');
        this.__wudi__ = '优秀'
    }
};

let source = {
    name:'xx',
    sc: 'asd',
    obj: {
        name: 'aaaaaa'
    },
    get wudi() {
        console.log('源头');
        return '撒大大';
    }
}

source.__proto__ = {
    kkkkk: 'kkkkkk'
}

console.log(source.kkkkk)

let obj = Object.assign(target,source);

console.log(obj, target, obj === target); // { name: 'xx', age: 20, sc: 'asd', obj: { name: 'aaaaaa' } } { name: 'xx', age: 20, sc: 'asd', obj: { name: 'aaaaaa' } } true
source.obj.name = 'lwd';
console.log(source, target); // { name: 'xx', sc: 'asd', obj: { name: 'lwd' } } { name: 'xx', age: 20, sc: 'asd', obj: { name: 'lwd' } }

