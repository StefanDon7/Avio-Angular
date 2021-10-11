import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentHomeService {

  constructor(private http:HttpClient) { }

  vratiLetove(){
    return this.http.get('https://localhost:44388/api/Let/get/all');
  }
}
