export class Persona{
    idPersona?: number;
    nombre: string;
    apellido: string;
    acerca_de: string;
    img: String;

    constructor(nombre: string, apellido: string, acercaDe: string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.acerca_de = acercaDe;
        this.img = img;
    }

}