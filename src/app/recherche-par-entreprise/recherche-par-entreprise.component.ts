import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../model/entreprise.model';
import { Employee } from '../model/employee.model';
import { EmployeesComponent } from '../employees/employees.component';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-recherche-par-entreprise',
  templateUrl: './recherche-par-entreprise.component.html',
  styles: [
  ]
})
export class RechercheParEntrepriseComponent implements OnInit {
  idEntreprise! : number;
  entreprises! : Entreprise[];
  employees: Employee[] = [];

 


  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.listeEntreprise().subscribe(entrs => {
      this.entreprises = entrs;
      console.log(entrs);
    });
    this.entreprises = [];
  }

 // onChange() {
   /*  this.employeeService.rechercherParEntreprise(this.idEntreprise).subscribe((emps: any) => {
      this.employees = emps;

    }); */

    onChange() {
      /* this.employeeService.rechercherParEntreprise(this.idEntreprise).subscribe((emps: any) => {
        console.log(emps); // Log the data to inspect its structure
        this.employees = emps;
      }); */


      this.employeeService.rechercherParEntreprise(this.idEntreprise).
       subscribe(emps =>{this.employees=emps});

    }
    
}



