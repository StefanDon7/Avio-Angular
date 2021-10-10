import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Korisnik } from '../models/korisnik.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  signin(email:string,password:string){
    return this.http.post<Korisnik>('https://localhost:44388/api/Korisnik/get',{ "email": email,"sifra": password})
  }
}
