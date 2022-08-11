import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { CircleProgressComponent } from './circle-progress/circle-progress.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NuevaExperienciaComponent } from './experiencia/nueva-experiencia.component';
import { EditarExpComponent } from './experiencia/editar-exp/editar-exp.component';
import { NuevoNivelComponent } from './educacion/nuevo-nivel/nuevo-nivel.component';
import { EditarNivelComponent } from './educacion/editar-nivel/editar-nivel.component';
import { EditarProyectoComponent } from './proyectos/editar-proyecto/editar-proyecto.component';
import { NuevoProyectoComponent } from './proyectos/nuevo-proyecto/nuevo-proyecto.component';
import { EditarPersonaComponent } from './acerca-de/editar-persona/editar-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    CircleProgressComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NuevaExperienciaComponent,
    EditarExpComponent,
    NuevoNivelComponent,
    EditarNivelComponent,
    EditarProyectoComponent,
    NuevoProyectoComponent,
    EditarPersonaComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
