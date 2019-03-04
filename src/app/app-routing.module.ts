import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvesListComponent } from './components/aves-list/aves-list.component';
import { AvesFormComponent } from './components/aves-form/aves-form.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/listarAves',
    pathMatch: 'full'
  },
  {
    path: 'listarAves',
    component: AvesListComponent
  },
  {
    path: 'listarAves/agregar',
    component: AvesFormComponent
  },
  {
    path: 'listarAves/editar/:cdave',
    component: AvesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
