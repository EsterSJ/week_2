import { Book } from "./book";
import { Library } from "./library";

let libro1, libro2, libro3, libro4, libro5: Book;
libro1 = new Book("El nombre del viento", 873, "9788804714095", "Patrick Rothfuss", "Plaza & Janés");
libro2 = new Book("Los pilares de la tierra", 1040, "9788401328510", "Ken Follett", "Plaza & Janés");
libro3 = new Book("Un mundo sin fin", 1184, "9788401336560", "Ken Follett", "Plaza & Janés");
libro4 = new Book("Una columna de fuego", 916, "9788401018251", "Ken Follett", "Plaza & Janés");
libro5 = new Book("El hilo invisible", 64, "9788418054051", "Miriam Tirado", "B de Block");

let books: Book[];

books = [];
books.push(libro1);
books.push(libro2);
books.push(libro3);
books.push(libro4);
books.push(libro5);

let libreria: Library;
libreria = new Library(books, "Gran Vía 23", "Jorge García Alonso");

libreria.setAddress("Paseo de la Castellana 114");
console.log(libreria.getAddress());

libreria.setManager("María Pérez Casado");
console.log(libreria.getManager());

console.log(libreria.toString());

console.log(libreria.getNumberOfBooks());

console.log(libreria.findByAuthor("Ken Follett"));




