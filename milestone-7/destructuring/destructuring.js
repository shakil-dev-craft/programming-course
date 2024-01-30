// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// console.log(x, y);
// const [x, y] = [42, 65];
const [x, y] = numbers;
// console.log(x, y);


function boxify(x, y) {
    const nums = [x, y];
    return nums;
};

const proccess = boxify(6, 8);
// console.log(proccess);


const student = {
    name: 'Shakil',
    age: 36,
    movies: ['king khan', 'Dhakar Mastan'],
};

const [firstMovie, secondMovie] = student.movies;
// console.log([firstMovie, secondMovie]);


// Object destructuring
// const {name, age} = {name: 'Shakil', age: 36};
const {name, age, salary} = {name: 'Shakil', age: 36, id: 12, salary: 3400};
// console.log({name, age, salary});


const employee = {
    ide: 'VS Code',
    designation: 'development',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 69,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    },
};

// const {machine, ide} = employee;
// const {weight, address} = employee.specification;
const {color, price, brand} = employee?.specification?.watch;
// console.log({address, weight});
// console.log({color, price, brand});