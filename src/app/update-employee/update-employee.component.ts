import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from '../model/entreprise.model';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';
import { Image } from '../model/image.model';



@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styles: [
  ]
})
export class UpdateEmployeeComponent implements OnInit {

  currentEntreprise = new Entreprise();
  Employee!:Employee[];
  currentEmployee = new Employee();
  entreprises!: Entreprise[];
  updatedEntrId! : number;
  idEntreprise! : number;
  myImage! : string;
  uploadedImage!: File;
  isImageUpdated: Boolean=false; 


  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private employeeService: EmployeeService) { }



              ngOnInit(): void {
                this.employeeService.listeEntreprise().subscribe((entrs) => {
                  this.entreprises = entrs;
                  console.log(entrs);
                });
              
                this.employeeService
                  .consulterEmployee(this.activatedRoute.snapshot.params['id'])
                  .subscribe((emp) => {
                    this.currentEmployee = emp;
                    this.updatedEntrId = this.currentEmployee.entreprise.idEntreprise;
              
                  });
              }
              


       onAddImageEmploye() { 
        this.employeeService .uploadImageEmp(this.uploadedImage, this.uploadedImage.name,this.currentEmployee.idEmploye) 
        .subscribe( (img : Image) => { this.currentEmployee.images.push(img); });

      } 

  

   updateEmployee() {
    if (this.updatedEntrId !== undefined) {
      this.currentEmployee.entreprise = this.entreprises.find((entr) => entr.idEntreprise === this.updatedEntrId)!;
          this.employeeService.updateEmployee(this.currentEmployee)
            .subscribe((emp) => {
              this.router.navigate(['employees']);
            });
        };
      } 

      
      
    
    /*  updateEmployee() {
      if (this.updatedEntrId !== undefined) {
        this.currentEmployee.entreprise = this.entreprises.find((entr) => entr.idEntreprise === this.updatedEntrId)!;
        if (this.isImageUpdated) {
          this.employeeService.uploadImage(this.uploadedImage, this.uploadedImage.name)
          .subscribe((img: Image) => {
            this.currentEmployee.image = img;
  
            this.employeeService.updateEmployee(this.currentEmployee)
              .subscribe((emp) => {
                this.router.navigate(['employees']);
              });
          });
        }
  
        else {
          this.employeeService.updateEmployee(this.currentEmployee)
            .subscribe((emp) => {
              this.router.navigate(['employees']);
  
            });
        }
      } 
    } */

    onImageUpload(event: any) {
      if (event.target.files && event.target.files.length) {
        this.uploadedImage = event.target.files[0];
        this.isImageUpdated = true;
        const reader = new FileReader();
        reader.readAsDataURL(this.uploadedImage);
        reader.onload = () => { this.myImage = reader.result as string; };
      }
    } 
     
      
    
 
    supprimerImage(img: Image)
    { let conf = confirm("Etes-vous sûr ?"); 
    if (conf) this.employeeService.supprimerImage(img.idImage).subscribe(() => 
    { //supprimer image du tableau currentProduit.images 
      const index = this.currentEmployee.images.indexOf(img, 0); 
      if (index > -1) { this.currentEmployee.images.splice(index, 1); } }); }
 
  
     
  
    }

