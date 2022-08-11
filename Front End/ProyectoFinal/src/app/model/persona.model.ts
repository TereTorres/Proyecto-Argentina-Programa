export class Persona{
    idpersona?: number;
    nombre: string;
    apellido: string;
    acercade: string;
    img: String;

    constructor(nombre: string, apellido: string, acercade: string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.acercade = acercade;
        this.img = img;
    }

}