import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {
idImage!:Number
    employees? : Employee[]; //un tableau de employees
    apiurl:string='http://localhost:8090/employees/api';

  constructor(private employeeService: EmployeeService) {
   //this.employees=[];
     }

  ngOnInit(): void {

    this.chargerEmployees();
  }

   chargerEmployees() {
    this.employeeService.listeEmployee().subscribe(prods => {
      this.employees = prods;
      this.employees.forEach((prod) => {
      prod.imageStr = 'data:' + prod.images[0].type + ';base64,' + 
      prod.images[0].image;
      }); 
      }) 
  /*   this.employeeService.listeEmployee().subscribe(emps => {
      console.log(emps);
      this.employees = emps;
      this.employees.forEach((emp) => {
        if (emp.image && emp.image.idImage) {
          this.employeeService.loadImage(emp.image.idImage)
            .subscribe((img: Image) => {
              emp.imageStr = 'data:' + img.type + ';base64,' + img.image;
            });
        }
      });
    }); */
  }  

  /* chargerEmployees() {
    this.employeeService.listeEmployee().subscribe(emps => {
      this.employees = emps;
      this.employees.forEach((emp) => {
        if (emp.images && emp.images.length > 0) {
          emp.imageStr = 'data:' + emp.images[0].type + ';base64,' + emp.images[0].image;
        }
      });
    });
  } */
   

supprimerEmployee(e: Employee)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.employeeService.supprimerEmployee(e.idEmploye).subscribe(() => {
        console.log("employee supprimé");
        this.chargerEmployees();     
      
});
}
 
 

}
