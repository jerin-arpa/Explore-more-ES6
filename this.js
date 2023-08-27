class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep() {
        console.log(`slepping now ${this.name}`)
    }
    activity() {
        this.sleep();
    }
}

const kodom = new Person('kodom', 21);
console.log(kodom);
kodom.sleep();

const badam = new Person('kacha badam', 23);
badam.sleep();

const lazy = kodom.sleep;
lazy();