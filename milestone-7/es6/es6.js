const numbers = [68, 37, 26, 96];

const student = {
  name: "Shakib",
  age: 32,
  movies: ["king khan", "Dhakar Tokai"],
};

// 1. templete string
const about = `My Name is ${student.name}, My age is ${numbers[2]}`;

// console.log(about);

// 2. arrow function
// one line function
const getFiftyFive = () => 55;

const addSixtyFive = num => num + 65;

const isEven = x => x % 2 === 0;

const addThree = (x, y, z) => x + y + z;

// multi line function must be implemented return
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
};


// spread operator must be implemented {...}
const newNumbers = [...numbers];
numbers.push(99);


// create a new array from an older array and add an element
const currentNumbers = [...numbers, 66];
console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);