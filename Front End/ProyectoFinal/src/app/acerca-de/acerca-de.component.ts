import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  persona: Persona = new Persona("","","","");

  constructor(private personaService: PersonaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void{
    this.personaService.listar().subscribe(data => {this.persona = data});
  }

}
