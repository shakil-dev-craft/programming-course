const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iPhone', color: 'golden' },
    { name: 'watch', price: 2000, brand: 'casino', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
];

// map - return
const brands = products.map(product => product.brand);
const prices = products.map(product => product.price);
// console.log(prices);

// forEach - no return
// products.forEach(product => console.log(product.name));
// products.forEach(product => console.log(product.brand));

products.forEach(product => {

});

// filter - every matching product will be filtered
const cheap = products.filter(product => product.price <= 5000);
const max = products.filter(product => product.price >= 5000);
const specificName = products.filter(product => product.name.includes('n'));
// console.log(specificName);


// find - only return first matching product
const special = products.find(product => product.name.includes('n'));
console.log(special);