import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavesComponent } from './components/swapi/naves/naves.component';
import { NavesInformacionComponent } from './components/swapi/naves-informacion/naves-informacion.component';
import { NavExternoComponent } from './components/swapi/nav-externo/nav-externo.component';
import { InfoComponent } from './components/mis-naves/info/info.component';
import { AddComponent } from './components/mis-naves/add/add.component';
import { ListComponent } from './components/mis-naves/list/list.component';
import { EditComponent } from './components/mis-naves/edit/edit.component';
import { NavInternoComponent } from './components/mis-naves/nav-interno/nav-interno.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavesComponent,
    NavesInformacionComponent,
    NavExternoComponent,
    InfoComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    NavInternoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
