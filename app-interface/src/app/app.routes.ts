import {  Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesFormComponent } from './clientes/clientes-form/clientes-form.component';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'clientes-form', component:ClientesFormComponent}
];
