function Mammal(name){
    this.name = name;
    this.offspring = [];
}
Mammal.prototype.sayHello = function(){
    return "My name is Joe, I'm a Mammal";
}

Mammal.prototype.haveBaby = function(){
    var baby = new Mammal("Baby " + this.name);
    this.offspring.push(baby);
    return baby;
}

function Cat(name, color){
    Mammal.call(this, name);
    this.color = color;
}

Cat.prototype.haveBaby = function(color){
    var baby = new Cat("Baby " + this.name, color);
    this.offspring.push(baby);
    return baby;
}