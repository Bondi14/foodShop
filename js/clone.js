const person = {
    name: 'bondi',
    age: 24
};

const clone = JSON.parse(JSON.stringify(person));
clone.age = 18;
console.log(person);
console.log(clone);