class Person {
    public name: string;
    public age: number;
    private address: string;

    constructor(nombre: string, edad: number, direccion: string){
        this.name = nombre;
        this.age = edad;
        this.address = direccion;
    }

    public printName(){
        console.log(this.name);
        
    }

    public yearOfBirth(currentYear: number){
        return currentYear - this.age;
    }

    public setAddress(newAddres: string){
        this.address = newAddres;
    }

    public getAddress(){
        return this.address;
    }

}

export {Person};
