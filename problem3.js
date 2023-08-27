const instructor = [
    {
        name: 'Nodi',
        age: 28,
        position: 'Senior',
    },
    {
        name: 'Akil',
        age: 26,
        position: 'Junior',
    },
    {
        name: 'Shobuj',
        age: 30,
        position: 'Senior',
    },
];

const findSenior = instructor.filter(positions => positions.position === 'Senior')
console.log(findSenior);