const products = [
    { id: 1, name: 'lenovo laptop', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'hp-book', price: 40000 },
    { id: 4, name: 'mac-book', price: 265000 },
];

// similar 
class Product {
    country = 'Bangladesh';
    constructor(name) {
        this.name = name;
    }
    speak(talk) {
        console.log(`talking about ${talk}`);
    }
}

const lenovo = new Product('lelenovo')
console.log(lenovo);
lenovo.speak('Hello hi bye bye');


class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    lecture() {
        console.log('Sir is teaching Math');
    }
}
const tapan = new Teacher('Topon sir', 'Physics')
console.log(tapan);