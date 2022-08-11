import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  URL = 'http://localhost:8080/personas/';

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Persona>{

    return this.httpClient.get<Persona>(this.URL + 'listar');
  }

  
  public detalle(id: number): Observable<Persona>{

    return this.httpClient.get<Persona>(this.URL + `detalle/${id}`);
  }

  public crear(persona: Persona):Observable<any>{

    return this.httpClient.post<any>(this.URL + 'crear', persona);
  }

  public editar(id: number, persona: Persona):Observable<any>{

    return this.httpClient.put<any>(this.URL + `editar/${id}`, persona);
  }

  public borrar(id: number): Observable<any>{

    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }

}
