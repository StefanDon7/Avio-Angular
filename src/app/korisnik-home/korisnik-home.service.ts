import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KorisnikHomeService {

  constructor(private http:HttpClient) { }

  
  vratiMesta(){
    return this.http.get('https://localhost:44388/api/mesto/get/all')
  }

  vratiMesta2(){
    return this.http.get('https://localhost:44388/api/mesto/get/all')
  }

  vratiLetove(mesto1:string,mesto2:string,datum:string){
    return this.http.get('https://localhost:44388/api/Let/get/all/by/'+mesto1+'/'+mesto2+'/'+datum);
  }
  vratiLetoveBezPresedanja(mesto1:string,mesto2:string,datum:string){
    return this.http.get('https://localhost:44388/api/Let/get/all/by/'+mesto1+'/'+mesto2+'/'+datum+"/notransfer");
  }

  rezervisiKartu(letID:string,korisnikID:string,){
    return this.http.post('https://localhost:44388/api/Rezervacija/add',{ "letID": letID,"korisnikID": korisnikID})
  }

  posaljiPoruku(){
    return this.http.get('https://localhost:44388/api/Message/get')
  }
 
  
}
