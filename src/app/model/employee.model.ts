import { Entreprise } from "./entreprise.model";
import { Image } from "./image.model";

export class Employee {
    idEmploye! : number;
    nomEmploye! : string;
    salaire! : number;
    entreprise! : Entreprise;
    image! : Image 
    imageStr!:string
    images!: Image[];

    }