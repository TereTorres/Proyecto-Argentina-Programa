import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { ExperienciaService } from '../service/experiencia.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  expe: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{

    this.experienciaService.listar().subscribe(data => {this.expe = data;})
  }

  delete(id_Experiencia?: number){

    if(id_Experiencia != undefined){
      this.experienciaService.borrar(id_Experiencia).subscribe(
        data => {
          this.cargarExperiencia();
        }, err =>{
          alert("No es posible borrar la experiencia seleccionada");
        }
      )
    }
  }

}

