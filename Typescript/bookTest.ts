import { Book } from "./book";

let libro: Book;
libro = new Book("El nombre del viento", 873, "9788804714095", "Patrick Rothfuss", "Plaza & Janés");

libro.setTittle("Corazones de la Atlántida");
libro.setnPages(942);
libro.setIsbn("9788804714044");
libro.setAuthor("Maria Pacheco");
libro.setEditorial("Bruño");

console.log(libro.getTittle());
console.log(libro.getnPages());
console.log(libro.getIsbn());
console.log(libro.getAuthor());
console.log(libro.getEditorial());

console.log(libro.toString());

