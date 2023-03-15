const myClassContacts = require("./contacts");
const myClassPerson = require("./person");

var persona1 = new myClassPerson.Person("Ester", "Sanchez", "castaño", false, "Navalcarnero", "femenino", 58, 1.68, 1985, ["comer", "leer", "patinar"]);
var persona2 = new myClassPerson.Person("Jorge", "Martin", "rubio", true, "Madrid", "masculino", 75, 1.89, 2001, ["cine", "ropa", "jugar a la play"]);
var persona3 = new myClassPerson.Person("Paula", "Gonzalo", "moreno", true, "Salamanca", "femenino", 63, 1.59, 1990, ["salir", "cantar", "cocinar"]);

let listaContactos = new myClassContacts.Contacts();
listaContactos.rellenarContactos(persona1, persona2, persona3);
listaContactos.printPersons();