function factorialIterative(num) {
    var fact = 1;
    for (var i = num; i >0; i--){
        fact *= i;
    }
    return fact;
}

function factorial(num){
    if (num ===0){
        return 1;
    }
    return factorial(num-1) * num;
}

function fib(num){
    if (num ===0 || num ===1){
        return 1;
    }
    return fib(num-1) + fib(num-2);
}

function type(obj){
    var typ = Object.prototype.toString.call(obj);
    typeArr = typ.split(" ");
    return typeArr[1].substring(0,typeArr[1].length-1)
}

function stringify(obj){
    if (type(obj) === 'Array'){
        var str = [];
        str.push("[");
        for (var i=0; i<obj.length; i++){
            str.push(stringify(obj[i]));
            str.push(",");
        }
        str.pop();
        str.push("]");
        str = str.join("");
        return str;
    } else if (type(obj) === 'Object'){
        var str= [];
        str.push("{");
        var k = Object.keys(obj).sort();
        for (var i=0; i<k.length; i++){
            str.push("\"" +String(k[i]) +"\""+ ": " + stringify(obj[k[i]]));
            str.push(",");
        }
        str.pop();
        str.push("}");
        return str.join("");
    } else if (type(obj) === "String"){
        return "\"" + obj + "\"";   
    } else {
        return String(obj);
    }
}