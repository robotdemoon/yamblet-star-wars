import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavesComponent } from './components/swapi/naves/naves.component';
import { NavesInformacionComponent } from './components/swapi/naves-informacion/naves-informacion.component';

import { InfoComponent } from './components/mis-naves/info/info.component';
import { AddComponent } from './components/mis-naves/add/add.component';
import { ListComponent } from './components/mis-naves/list/list.component';
import { EditComponent } from './components/mis-naves/edit/edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'naves/:idmovie', component: NavesComponent},
  { path: 'nave/:id', component: NavesInformacionComponent},
  { path: 'nave/:id/add', component: AddComponent},
  { path: 'mis-naves', component: ListComponent},
  { path: 'mis-naves/:id', component: InfoComponent},
  { path: 'mis-naves/:id/edit', component: EditComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
