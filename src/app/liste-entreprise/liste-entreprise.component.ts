import { Component, OnInit } from "@angular/core";
import { Entreprise } from "../model/entreprise.model";
import { EmployeeService } from "../services/employee.service";


@Component({
    selector: 'app-liste-entreprise',
    templateUrl: './liste-entreprise.component.html',
    styleUrls: []
  })

export class ListeEntreprisesComponent implements OnInit {
     entreprises! : Entreprise[]; 

     updatedEntr:Entreprise = {"idEntreprise":0,"nomEntreprise":"","adresseEntreprise":""};
     ajout:boolean=true;


     constructor(private employeeService : EmployeeService) { } 


     ngOnInit(): void {
    this.chargerEntreprises();
    }

  entrepriseUpdated(entr: Entreprise) 
  { console.log("Entr updated event", entr); 
   this.employeeService.ajouterEntreprise(entr).subscribe(() => this.chargerEntreprises()); }

   chargerEntreprises()
  {
    this.employeeService.listeEntreprise().
    subscribe((entrs) => {
      this.entreprises = entrs;
      console.log(entrs);
    });
   }
   updateEntr(entr:Entreprise) 
   { this.updatedEntr=entr;
    this.ajout=false;  }
  }