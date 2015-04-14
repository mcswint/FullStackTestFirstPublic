// 06_Functional 
function doubler(num){
    return num *2;
}

function map(arr, funct){
    var newArr = [];
    for (var i=0; i<arr.length; i++){
        newArr[i] = funct(arr[i]);
    }
    return newArr;
}

function filter(arr, funct){
    var newArr = [];
    for (var i=0; i<arr.length; i++){
            if (funct(arr[i])){
                newArr.push(arr[i]);
            }
    }
    return newArr;
}

function contains(arr, element){
    if (typeof(arr)=== "object"){
        for (var i in arr){
            if (arr[i] === element){
                return true;
            }
        }
    } else{
        for (var i =0; i<arr.length; i++){
            if (arr[i]=== element){
                return true;
            }
        }
    }
    return false;
}

function countWords(string){
    return string.split(" ").length;
}

function reduce(arr, start, funct){
    var ans = [];
    ans.push(0);
    while(arr.length!==0){
        var newVar = funct(ans.pop(), arr.pop());
        ans.push(newVar); 
    }
    return ans[0];
}

function countWordsInReduce(curr, str){
    return curr + countWords(str);
}

function sum(arr){
    var funct = function(a,b){return a+b};
    return reduce(arr, 0, funct);
}

function every(arr, funct){
    for (var i=0; i<arr.length; i++){
        if (!funct(arr[i])){
            return false;
        }
    }
    return true;
}

function any(arr, funct){
    for (var i=0; i<arr.length; i++){
        if (funct(arr[i])){
            return true;
        }
    }
    return false;
}