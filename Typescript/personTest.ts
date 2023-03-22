import {Person} from "./person";

let persona = new Person("Ester", 38, "Avenida Jura de Santa Gadea");
persona.printName();

let currentYear = new Date().getFullYear();
console.log(persona.yearOfBirth(currentYear));

persona.setAddress("Calle Cervantes 6");
console.log(persona.getAddress());