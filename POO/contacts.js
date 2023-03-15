class Contacts {
    constructor (){
        this.listapersonas = [];
    }

    rellenarContactos (c1, c2, c3){
        this.listapersonas.push(c1);
        this.listapersonas.push(c2);
        this.listapersonas.push(c3);
    }

    printPersons (){
        for (let contacto of this.listapersonas){
            contacto.printAll();
        }
    }
}

module.exports = {Contacts}