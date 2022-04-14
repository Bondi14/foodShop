'use strict';

function showThis (a, b) {
    console.log(this);
    function sum () {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}

showThis(4, 5);

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};
obj.sum();

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name : 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count (num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(12));

// 1) Обична функція - this = Window, але якшо use strict то вона undefined
// 2) Котекст у методів обєкта - сам обєкт 
// 3) this в конструкторах і класах - це новий екземпляр обєкту
// 4) ручна привязка this: call, aply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    console.log(this);
});

// 5) ^ передасть <button></button>

const obj = {
    num: 5,
    sayNumber : function () {
        const say = () => {
            console.log(this.num);
        };

        say();
    } 
};

obj.sayNumber();

const tripple = a => a * 3;

// 6) ^ найкоротше записання стрілочної функції із одним аргументом


