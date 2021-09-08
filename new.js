class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person('hero', 'jamal',20000);
console.log(heroPerson);

// old way of declaring class
// function Person1(firstName, lastName, salary){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
// }
// const oldPerson = new Person1('Abir','Islam', 225000);
// console.log(oldPerson);