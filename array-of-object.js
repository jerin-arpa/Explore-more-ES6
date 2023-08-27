const products = [
    { id: 1, name: 'lenovo laptop', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp-book', price: 40000 },
    { id: 4, name: 'mac-book', price: 265000 },
];

// map
const names = products.map(product => product.name);
console.log(names);


// foreach
products.forEach(p => console.log(p.id));

// filter
const expensive = products.filter(p => p.price > 50000);
console.log(expensive);


// find
const affordable = products.filter(p => p.price < 50000);
console.log(affordable);

// reduce
const total = products.reduce((accumulator, current) => accumulator + current.price, 0);
console.log(total);