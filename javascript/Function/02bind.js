let fun = function() {
    let name = 'dd'
    console.log(this)
};


let fun2 = fun.bind(null); 
fun(); // 全局对象 global
fun2() //全局对象 global


let aaa = function() {
    let bbb = function() {
        console.log(this);
    };

    let ccc = bbb.bind(null);
    ccc();
};

aaa();