class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`My name is ${this.name}`)
  }
}

class Citizen extends Person {
  constructor(name, country) {
    super(name);
    this.country = country;
  }

  sayCountry() {
    console.log(`My country is ${this.country}`);
  }
}

var p1 = new Person('Dima');
p1.sayName();

var p2 = new Citizen('Sarah', 'US');
p2.sayName();
p2.sayCountry();
