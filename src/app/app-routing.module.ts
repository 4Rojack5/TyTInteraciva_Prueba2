import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EditEmpleadoComponent } from './views/edit-empleado/edit-empleado.component';
import { NewEmpleadoComponent } from './views/new-empleado/new-empleado.component';

//ENRUTADO DE TODAS LAS VISTAS
const routes: Routes = [
  {
    path: '', 
    redirectTo: 'dashboard', 
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'new',
    component: NewEmpleadoComponent
  },
  {
    path: 'edit/:id',
    component: EditEmpleadoComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, NewEmpleadoComponent, EditEmpleadoComponent]
