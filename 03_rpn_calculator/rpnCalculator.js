function RPNCalculator() {
    this.cache = [];
    this.val = 0;
    this.push = function(x){this.cache.push(x)};
    this.value = function(x){return this.val};
};

RPNCalculator.prototype.plus = function(){
    if (this.cache.length < 1){throw "rpnCalculator is empty";};
    this.val = this.cache.pop() + this.cache.pop();
    this.cache.push(this.val);
};

RPNCalculator.prototype.value = function(){
    return this.val;
};

RPNCalculator.prototype.minus = function(){
    if (this.cache.length < 1){throw "rpnCalculator is empty";};
    var top = this.cache.pop();
    var next = this.cache.pop();
    this.val = next - top;
    this.cache.push(this.val);
};

RPNCalculator.prototype.divide = function(){
    if (this.cache.length < 1){throw "rpnCalculator is empty";};
    var top = this.cache.pop();
    var next = this.cache.pop();
    this.val = next / top;
    this.cache.push(this.val);

};

RPNCalculator.prototype.times = function(){
    if (this.cache.length < 1){throw "rpnCalculator is empty";};
    this.val = this.cache.pop() * this.cache.pop();
    this.cache.push(this.val);
}