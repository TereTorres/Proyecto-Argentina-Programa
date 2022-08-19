import { Component, OnInit } from '@angular/core';
import { Hysskills } from '../model/hysskills';
import { HysskillsService } from '../service/hysskills.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.css']
})
export class CircleProgressComponent implements OnInit {

  hys: Hysskills[] = [];

  constructor(private hysskillsService: HysskillsService, private tokenSercive: TokenService) {}
   
  isLogged = false;
  
  ngOnInit(): void {
 
    this.cargarHys();
    if(this.tokenSercive.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarHys(): void{

    this.hysskillsService.listar().subscribe(data => {this.hys = data;})
  }
 
  delete(id_Hys?: number){
    if(id_Hys != undefined){
      this.hysskillsService.borrar(id_Hys).subscribe(
        data => {
          this.cargarHys();
        }, err =>{
          alert("No es posible borrar la habilidad seleccionada, necesita permiso de Administrador");
        }
      )
    }
  }
}
