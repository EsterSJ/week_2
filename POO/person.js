class Person {
    constructor (nombre, apellido, colorPelo, mascota, ciudad, genero, peso, altura, yearOfBirth, hobbies){
        this.nombre = nombre;
        this.apellido = apellido;
        this.colorPelo = colorPelo;
        this.mascota = mascota;
        this.ciudad = ciudad;
        this.genero = genero;
        this.peso = peso;
        this.altura = altura;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
    }

    calcularIMC (){
        return this.peso / (this.altura*this.altura);
    }

    edad (anyoNacimiento){
        return new Date().getFullYear() - anyoNacimiento;
    }

    printAll (){
        for (let [key, value] of Object.entries(this)){
            console.log(key + " - " + value);
        }
    }

    printHobbies (){
        for (let value of this.hobbies){
            console.log(value);
        }
    }
}

module.exports = {Person}