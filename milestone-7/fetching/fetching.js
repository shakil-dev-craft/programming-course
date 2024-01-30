// 1. JSON

const student = {
  name: "Shakib",
  age: 32,
  movies: ["king khan", "Dhakar Tokai"],
};

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);


// 2. fetch
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log(data));


// keys, values
const studentKeys = Object.keys(student);
const studentValues = Object.values(student);
const studentInfo = studentValues.map(value => value);
// console.log(studentInfo[2]?.[1]);