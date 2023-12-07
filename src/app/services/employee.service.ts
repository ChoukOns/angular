import { Injectable } from '@angular/core';
import { Entreprise } from '../model/entreprise.model';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EntrepriseWrapper } from '../model/entrepriseWrapped.model';
import { Image } from '../model/image.model';


const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiURL: string = 'http://localhost:8090/employees/api';
  apiURLEntr: string = 'http://localhost:8090/employees/entr';

  employees! : Employee[]; //un tableau de employees
  entreprises! : Entreprise[]
 

  constructor(private http : HttpClient) { 
      
  }

  listeEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiURL);
    }

    ajouterEmployee( emp: Employee):Observable<Employee>{
      return this.http.post<Employee>(this.apiURL, emp, httpOptions);
      }

      supprimerEmployee(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }

        
        consulterEmployee(id: number): Observable<Employee> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Employee>(url);
          }

      

          updateEmployee(emp :Employee) : Observable<Employee>
            {
                return this.http.put<Employee>(this.apiURL, emp, httpOptions);
            }

            /*trierEmployees(){
              this.employees = this.employees.sort((n1,n2) => {
                if (n1.idEmploye > n2.idEmploye) {
                    return 1;
                }
               if (n1.idEmploye < n2.idEmploye) {
                    return -1;
                }
              return 0;
            });
            }*/
         
       listeEntreprises():Observable<EntrepriseWrapper>{
            return this.http.get<EntrepriseWrapper>(this.apiURL+ "/entr");
            }     

            consulterEntreprise(id:number): Entreprise
            { return this.entreprises.find(entr => entr.idEntreprise == id)!; }


  rechercherParEntreprise(idEntr: number): Observable<Employee[]> {
    const url = `${this.apiURL}/${idEntr}`;
    return this.http.get<Employee[]>(url);
  } 

  rechercherParNom(nom: string):Observable< Employee[]> {
    const url = `${this.apiURL}/empsByName/${nom}`;
    return this.http.get<Employee[]>(url);
    }

 
    ajouterEntreprise(entr: Entreprise): Observable<Entreprise> {
      return this.http.post<Entreprise>(this.apiURLEntr, entr);
    }

    listeEntreprise(): Observable<Entreprise[]> {
      return this.http.get<Entreprise[]>(this.apiURL + "/entr");
    }

    
  
    uploadImage(file: File, filename: string): Observable<Image>{
      const imageFormData = new FormData();
      imageFormData.append('image', file, filename);
      const url = `${this.apiURL + '/image/upload'}`;
      return this.http.post<Image>(url, imageFormData);
      }
  
    
      loadImage(id: number): Observable<Image> {
        const url = `${this.apiURL + '/image/get/info'}/${id}`;
        return this.http.get<Image>(url);
        }

         uploadImageEmp(file: File, filename: string, idEmploye:number): Observable<any>
        { const imageFormData = new FormData(); 
          imageFormData.append('image', file, filename); 
          const url = `${this.apiURL + '/image/uplaodImageEmp'}/${idEmploye}`; 
          return this.http.post(url, imageFormData); 
        } 


        supprimerImage(id : number) 
        { const url = `${this.apiURL}/image/delete/${id}`; 
        return this.http.delete(url, httpOptions); } 
   
}
