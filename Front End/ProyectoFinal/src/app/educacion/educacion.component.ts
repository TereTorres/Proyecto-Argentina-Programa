import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion';
import { EducacionService } from '../service/educacion.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  edu: Educacion[] = [];

  constructor(private educacionService: EducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void{

    this.educacionService.listar().subscribe(data => {this.edu = data;})
  }

  delete(id_Educacion?: number){

    if(id_Educacion != undefined){
      this.educacionService.borrar(id_Educacion).subscribe(
        data => {
          this.cargarEducacion();
        }, err =>{
          alert("No es posible borrar el nivel seleccionado");
        }
      )
    }
  }

}
