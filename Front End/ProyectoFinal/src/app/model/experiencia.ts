
export class Experiencia {

    id_Experiencia? : number;
    nombreExp: string;
    anioIngreso: number;
    anioEgreso: number;
    cargoExp: string
    descripcionExp: string;

    constructor(nombreExp: string, anioIngreso: number, anioEgreso: number,
        cargoExp: string, descripcionExp: string){
            this.nombreExp = nombreExp;
            this.anioIngreso = anioIngreso;
            this.anioEgreso = anioEgreso;
            this.cargoExp = cargoExp;
            this.descripcionExp = descripcionExp;
        }
}
