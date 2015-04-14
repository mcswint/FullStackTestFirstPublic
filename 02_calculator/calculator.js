var createCalculator = function(){
    var calculator = {};
        calculator.val = 0;
        calculator.value = function() {return this.val};
        calculator.add = function(x) {this.val = x + this.val};
        calculator.subtract = function(x) {this.val = this.val -x};
    return calculator;
};