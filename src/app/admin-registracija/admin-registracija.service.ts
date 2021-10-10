import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Korisnik } from '../models/korisnik.model';

@Injectable({
  providedIn: 'root'
})
export class AdminRegistracijaService {

  constructor(private http:HttpClient) { }

  register(ime:string,prezime:string,email:string,sifra:string){
    return this.http.post<Korisnik>('https://localhost:44388/api/Korisnik/add',{ "ime": ime,"prezime": prezime,"email": email,"sifra": sifra})
  }

  vratiKorisnika(email:string){
    return this.http.post('https://localhost:44388/api/Korisnik/getbyemail',{ "email": email})
  }
}
