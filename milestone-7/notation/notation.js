const person = {
    name: 'John',
    profession: 'Traffic Surgent',
    age: 36,
    25: 'road',
    address: 'Sirajganj'
};

// dot notation

const prof1 = person.profession;
// console.log(prof1);

// brackets notation
const prof2 = person['profession'];
const pName = 'profession';
const prof3 = person[pName];

// console.log(prof3);

const road = person[25];
console.log(road);