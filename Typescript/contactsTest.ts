import { Contacts } from "./contacts";
import { Person } from "./person";

let contacto1: Person;
let contacto2: Person;
let contacto3: Person;

contacto1 = new Person("Ester", 38, "Avenida jura de Santa Gadea 98");
contacto2 = new Person("Rubén", 39, "Calle Cervantes 6");
contacto3 = new Person("Alicia", 23, "Avenida jura de Santa Gadea 98");

let agenda: Contacts;
agenda = new Contacts();

agenda.rellenarContactos(contacto1, contacto2, contacto3);
agenda.printCalendar();





