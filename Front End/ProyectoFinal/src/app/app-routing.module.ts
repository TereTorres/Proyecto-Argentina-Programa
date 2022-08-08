import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarExpComponent } from './experiencia/editar-exp/editar-exp.component';
import { NuevaExperienciaComponent } from './experiencia/nueva-experiencia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NuevaExperienciaComponent},
  {path:'editarExp/:id_Experiencia', component: EditarExpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
