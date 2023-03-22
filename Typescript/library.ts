import { Book } from "./book";

class Library {
    private books: Book[];
    private address: string;
    private manager: string;

    constructor (books: Book[], address: string, manager: string){
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    public setAddress(newAddress: string): void{
        this.address = newAddress;
    }

    public getAddress(): string{
        return this.address;
    }

    public setManager(newManager: string): void{
        this.manager = newManager;
    }

    public getManager(): string{
        return this.manager;
    }

    public toString(): string{
        let cadena: string = "";
        let index: number = 1;
        for (let book of this.books){
            cadena += `Book ${index}:\n${book.toString()}\n`;
            index++;
        }
        return cadena;
    }

    public getNumberOfBooks(): number{
        return this.books.length;
    }

    public findByAuthor(author: string): Book[]{
        let arrayBooks: Book[] = [];
        for (let book of this.books){            
            if (book.getAuthor() == author){
                arrayBooks.push(book);
            }
        }
        return arrayBooks;
    }
}

export {Library}