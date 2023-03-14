const myClass = require("./person");

let persona1 = new myClass.Person("Ester", "Sanchez", "castaño", false, "Navalcarnero", "femenino", 58, 1.68, 1985, ["comer", "leer", "patinar"]);
console.log(persona1);
console.log(persona1.calcularIMC());
persona1.printAll();
persona1.printHobbies();