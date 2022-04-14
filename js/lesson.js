'use strict';

function User (name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    }
}

User.prototype.exit = function() {
    console.log(`Exit ${this.name}`);
};

const ivan = new User('Ivan', 23);
const alex = new User('Alex', 20);

ivan.exit();

alex.hello();
ivan.hello();

console.log(ivan);
console.log(alex);