// Functions.js
function concat_string(){
    var args = Array.prototype.slice.call(arguments);
    return args.join("");
}

function yourFunctionRunner(funct){
    string = "";
    for (var i =0; i<arguments.length; i++){
        string += arguments[i]();
    }
    return string;
}

function makeAdder(num){
    return function(othNum){return num + othNum;};
}

function once(funct){
    var times= 0;
    return function () {
        if (times === 0){
            times = 1;
            funct();
        }
    }
}

function createObjectWithTwoClosures(){
    var val = 0;
    return sharedObj = {
        oneIncrementer :function(){val += 1;},
        tensIncrementer :function(){val += 10;},
        getValue : function(){return val;}
    };
}