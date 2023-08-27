// find the element which are divisible by 10using array.filter

const array = [33, 50, 79, 78, 90, 101, 30];

const divisible = array.filter(num => num % 10 === 0);
console.log(divisible);


const divisible2 = array.find(num => num % 10 === 0);
console.log(divisible2);