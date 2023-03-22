import { Person } from "./person";

class Contacts {
    public people: Person[];

    constructor(){
        this.people = [];
    }

    public rellenarContactos (c1: Person,c2: Person, c3: Person): void{
        this.people.push(c1);
        this.people.push(c2);
        this.people.push(c3);
    }

    public printCalendar (): void{
        for (let contacto of this.people){
            console.log(contacto);
        }
    }    
}

export {Contacts}