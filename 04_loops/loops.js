function repeat(word, times) {
    string = "";
    for (var i=0; i<times; i++){
        string += word;
    }
    return string;
}

function sum(numArr) {
    val = 0;
    for (var i=0; i<numArr.length; i++){
        val += numArr[i];
    }
    return val;
}

function gridGenerator(size){
    grid = "";
    for (var i=0; i<size; i++){
        line = "";
        odd = true;
        if (i%2 ==1){
            odd = false;
        }
        for (var j=0; j<size; j++){
            if (odd){
                line += '#';
                odd = false;
            } else {
                line += ' '
                odd = true;
            }
        }
        line += "\n";
        grid += line;
    }
    return grid;
}

function largestTriplet(c){
    largest = [];

    var nest = function(x) {
        for (var a = 1; a<c; a++){
            for (var b=1; b<c; b++){
                if (Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2)){
                    if(largest.length != 0){
                        if (largest[1]< b){
                            largest = [a,b,c];
                        }
                    } else {
                        largest = [a,b,c];
                    }
                }
            }
        }
    }
    while (largest.length == 0){
        nest(c);
        c = c-1;
    }
    return largest;

}

function join(arr, delim){
    joined = '';
    for (var i=0; i< arr.length; i++){
        joined += arr[i];
        if (delim != undefined && i!= arr.length-1){
            joined += delim;
        }
    }
    return joined;
}

function paramify(params){
    var string = "";
    var k = Object.keys(params).sort();
    for (var i=0; i<k.length; i++){
        string += k[i] + "=" + params[k[i]];
        if (i!= k.length-1){
            string += "&";
        }
    }
    return string;
} 