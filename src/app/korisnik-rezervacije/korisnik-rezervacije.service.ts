import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KorisnikRezervacijeService {

  constructor(private http:HttpClient) { }


  vratiSveRezervacije(korisnikID:string){
    return this.http.post('https://localhost:44388/api/Rezervacija/get/all/by/userID',{ "korisnikID": korisnikID})
  }


  // otkaziRezervaciju(klijentID:string,polazakID: string){
  //   return this.http.post('http://localhost:8089/api/rezervacija/delete',{
  //     "klijentID": klijentID,
  //     "polazakID": polazakID
  // })
  // }
}
