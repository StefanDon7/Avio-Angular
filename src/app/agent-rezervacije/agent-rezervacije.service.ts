import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentRezervacijeService {
  
  constructor(private http:HttpClient) { }


  vratiSveRezervacije(){
    return this.http.get('https://localhost:44388/api/Rezervacija/get/all')
  }
  odobriRezervaciju(korisnikID:string,rezervacijaID:string){
    return this.http.put('https://localhost:44388/api/Rezervacija/update',{"agentID":korisnikID,"rezervacijaID":rezervacijaID})
  }
}
