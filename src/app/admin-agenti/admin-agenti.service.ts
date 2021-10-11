import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAgentiService {

  constructor(private http:HttpClient) { }

  vratiRezervacijeZaAgente(){
    return this.http.get('https://localhost:44388/api/Rezervacija/get/all/by/agent')
  }
}
