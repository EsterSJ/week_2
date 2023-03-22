class Book {
    private tittle: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    constructor (tittle: string, nPages: number, isbn: string, author: string, editorial: string){
        this.tittle = tittle;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    public setTittle(newTittle: string): void{
        this.tittle = newTittle;
    }

    public setnPages(newnPages: number): void{
        this.nPages = newnPages;
    }

    public setIsbn(newIsbn: string): void{
        this.isbn = newIsbn;
    }

    public setAuthor(newAuthor: string): void{
        this.author = newAuthor;
    }

    public setEditorial(newEditorial: string): void{
        this.editorial = newEditorial;
    }

    public getTittle(): string{
        return this.tittle;
    }

    public getnPages(): number{
        return this.nPages;
    }

    public getIsbn(): string{
        return this.isbn;
    }

    public getAuthor(): string{
        return this.author;
    }

    public getEditorial(): string{
        return this.editorial;
    }

    public toString(): string{
        return `Tittle - ${this.tittle} \nNumber of pages - ${this.nPages} \nisbn - ${this.isbn} \nAuthor - ${this.author} \nEditorial - ${this.editorial}`;
    }
}

export {Book}