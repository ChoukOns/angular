import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from '../model/entreprise.model';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent implements OnInit {

  newEmployee = new Employee();
  entreprises! : Entreprise[] ;
  message!: string;
  newEntreprise! : Entreprise;
  newidEntreprise! :number;
  uploadedImage!: File; 
  imagePath: any;
 
 
  
  constructor(private employeeService: EmployeeService,
              private router : Router) { }

              ngOnInit(): void {
                this.employeeService.listeEntreprise().
                subscribe((entrs) => {
                  this.entreprises = entrs;
                  console.log(entrs);
                });
              }

 
  addEmployee(){
    this.newEmployee.entreprise=this.entreprises.find((v:any)=>this.newidEntreprise==this.newidEntreprise)!;
this.employeeService.ajouterEmployee(this.newEmployee).subscribe((createEmploye:Employee)=>{
  this.newEmployee=createEmploye;
  this.employeeService.uploadImageEmp(this.uploadedImage,this.uploadedImage.name,this.newEmployee.idEmploye).subscribe((img:Image)=>{
    this.newEmployee.image=img;
    this.employeeService.updateEmployee(this.newEmployee).subscribe(()=>{
      this.router.navigate(['employees']);
    })
  })
})  
   /*  this.employeeService
    .uploadImage(this.uploadedImage, this.uploadedImage.name)
    .subscribe((img: Image) => {
    this.newEmployee.image=img;
    this.newEmployee.entreprise = this.entreprises.
    find(entr => entr.idEntreprise
    == this.newidEntreprise)!;
      this.employeeService.ajouterEmployee(this.newEmployee).
      subscribe(() => {
        this.router.navigate(['employees']);
      });
    }); */
    }


    onImageUpload(event: any) {
      this.uploadedImage = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = (_event) => { this.imagePath = reader.result; }
      }
    };
    
  

   


