import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarNivelComponent } from './educacion/editar-nivel/editar-nivel.component';
import { NuevoNivelComponent } from './educacion/nuevo-nivel/nuevo-nivel.component';
import { EditarExpComponent } from './experiencia/editar-exp/editar-exp.component';
import { NuevaExperienciaComponent } from './experiencia/nueva-experiencia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditarProyectoComponent } from './proyectos/editar-proyecto/editar-proyecto.component';
import { NuevoProyectoComponent } from './proyectos/nuevo-proyecto/nuevo-proyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NuevaExperienciaComponent},
  {path:'editarExp/:id_Experiencia', component: EditarExpComponent},
  {path:'nuevonivel', component: NuevoNivelComponent},
  {path:'editarnivel/:id_Educacion', component: EditarNivelComponent},
  {path:'nuevoproyecto', component: NuevoProyectoComponent},
  {path:'editarproyecto/:id_Proyecto', component: EditarProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
