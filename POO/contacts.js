const myClass = require("./person");

var persona1 = new myClass.Person("Ester", "Sanchez", "castaño", false, "Navalcarnero", "femenino", 58, 1.68, 1985, ["comer", "leer", "patinar"]);
var persona2 = new myClass.Person("Jorge", "Martin", "rubio", true, "Madrid", "masculino", 75, 1.89, 2001, ["cine", "ropa", "jugar a la play"]);
var persona3 = new myClass.Person("Paula", "Gonzalo", "moreno", true, "Salamanca", "femenino", 63, 1.59, 1990, ["salir", "cantar", "cocinar"]);

class Contacts {
    constructor (){
        this.listapersonas = [persona1, persona2, persona3];
    }

    printPersons (){
        for (let contacto of this.listapersonas){
            contacto.printAll();
        }
    }
}

module.exports = {Contacts}