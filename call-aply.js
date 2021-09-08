const normalPerson = {
    firstName: "Rahim",
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName,this.lastName);
    },
    chargeBill: function(amount, tips, tax){
           console.log(this);
           this.salary = this.salary - amount - tips -tax;
           return this.salary;
    }
}
// normalPerson.chargeBill(150);
// console.log(normalPerson.salary);
const heroPerson = {
    firstName: 'Hero',
    lastName: "Jamal",
    salary: 25000,
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: "Kamal",
    salary: 25000,
}
// normalPerson.chargeBill();
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// console.log(heroPerson.salary);
// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(5000);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 500, 250, 300);
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson,[5000, 200, 300]);
console.log(heroPerson.salary);