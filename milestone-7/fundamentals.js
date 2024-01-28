// step 1: How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// console.log(season);

// 6 basic conditions: >, <, ===, !==, <=, >=
// multiple conditions: &&, ||

if(fatherName === 'Oh no' || season === 'rainy'){
    // console.log('It is a valid');
}else if(fatherName === 'Shakil'){
    // console.log('My father is Shakil');
}else{
    // console.log('I am not sure, It is valid or false');
}


// 3. array
const numbers = [68, 37, 26, 96]
numbers[0] = 30;
// console.log(numbers);


// 4. for loop
for (let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    // console.log(number);
}


// 5. function
function multiple(x, y) {
    const mul = x * y;
    return mul;
};

const proccess = multiple(5, 8);
// console.log(proccess);


// 6. Object
const student = {
    name: 'Shakib',
    age: 32,
    movies: ['king khan', 'Dhakar Tokai'],
};

const myVariable = 'name';

// console.log(student);
// console.log(student.age);
// console.log(student['name']);
// console.log(student[myVariable]);