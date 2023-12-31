import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import {  HttpClientModule } from '@angular/common/http';
import { RechercheParEntrepriseComponent } from './recherche-par-entreprise/recherche-par-entreprise.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

import {  ListeEntreprisesComponent } from './liste-entreprise/liste-entreprise.component';
import { UpdateEntrepriseComponent } from './update-entreprise/update-entreprise.component';
import { SearchFilterPipe } from './Search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';






@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    RechercheParEntrepriseComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeEntreprisesComponent,
    UpdateEntrepriseComponent,
 

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  
    
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
