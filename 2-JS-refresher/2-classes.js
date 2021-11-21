// Classes are blueprints of objects
class Human {
  constructor(){
    this.gender = 'male';
  }
  printGender(){
    console.log(this.gender)
  }
}

// By extending parent class child class inherits methods and properties of parent class (must use super)
class Person extends Human {
  constructor(){
    super();
    this.name = 'Matthijs';
  }
  printMyName(){
    console.log(this.name)
  }
}

// instantiated with new keyword
const myPerson = new Person()
myPerson.printMyName()
myPerson.printGender()

// ES7 without constructor and super
class Humans {
  gender = 'male';
  printGender = () => console.log(this.gender)
}

class Persons extends Human {
  name = 'Matthijs';
  printMyName= () => console.log(this.name)
}

// instantiated with new keyword
const myPersons = new Persons()
myPersons.printMyName()
myPersons.printGender()