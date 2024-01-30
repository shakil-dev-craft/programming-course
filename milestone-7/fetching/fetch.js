// 1. JSON.stringify and JSON.parse

const student = {
    name: 'Shakil Ahmed',
    age: 18,
    movies: ['King Khan', 'Oh no']
};

const studentJSON = JSON.stringify(student);
const studentJSONParsed = JSON.parse(studentJSON);
// console.log(studentJSONParsed);


// 2. fetch
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
//   .then((data) => console.log(data));



// keys, values
const keys = Object.keys(student);
const values = Object.values(student);
// console.log(values);



// for
const numbers = [23, 454, 343, 64, 365, 245];
// numbers.forEach((number) => console.log(number));



// for of on array like objects
// for in on object



// add or remove products
const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "iPhone", color: "golden" },
  { name: "watch", price: 2000, brand: "casino", color: "yellow" },
  { name: "sunglass", price: 300, brand: "ribon", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

const newProduct = {name: 'webcam', price: 7000, brand: 'Kala'};

const addProduct = [...products, newProduct];
// console.log(addProduct);

const removePhone = products.filter(products => products.name !== 'phone');
// console.log(removePhone);