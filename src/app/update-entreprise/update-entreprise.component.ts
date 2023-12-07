import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Entreprise } from "../model/entreprise.model";
import { EmployeeService } from "../services/employee.service";

@Component({
    selector: 'app-update-entreprise',
    templateUrl: './update-entreprise.component.html',
    styleUrls: []
  })
  export class UpdateEntrepriseComponent implements OnInit{
  
    @Input()
    entreprise! : Entreprise;
    @Output() 
    entrepriseUpdated = new EventEmitter<Entreprise>();
    
    @Input()
    ajout!:boolean;
  
    
  
  
    constructor(/* private employeeService : EmployeeService */){}


     saveEntreprise(){
    this.entrepriseUpdated.emit(this.entreprise); 
    } 
  
    ngOnInit(): void {
       // console.log(this.entreprises);
         console.log("ngOnInit du composant UpdateEntreprise ",this.entreprise); 
    }
  }