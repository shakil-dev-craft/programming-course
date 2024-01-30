// 'almas', 6, true, {}, []
// '', 0, false, null, undefined

let myVar = 150;
if(myVar){
    myVar = myVar * 100;
    // console.log(myVar);
}else{
    myVar = 0;
}


let myMoney = 50;
if(!myMoney){
    // console.log(myMoney);
}


const money = 180;
let food;
if(money > 100){
    food = 'biryani';
    // console.log(food);
}else{
    food = 'cha biscuits';
    // console.log(food);
}


// ternary 

let food1 = money > 100 ? 'biryani' : 'cha and drink';

let drink = (money > 100 && myVar > 100) ? 'cock' : 'filter water';
// console.log(drink);


// number to string conversion
const num1 = 43;
const numStr = num1 + '';
// console.log(num1)
// console.log(numStr);

// string to number
const input = '590';
const inputNum = +input;
// console.log(inputNum);


let isActive = false;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// isActive ? showUser() : hideUser();

// isActive && showUser();

// isActive || showUser();
isActive = !isActive;
// console.log(isActive);