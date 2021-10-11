import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AgentLetService {
  constructor(private http: HttpClient) {}

  vratiMesta() {
    return this.http.get("https://localhost:44388/api/mesto/get/all");
  }

  vratiMesta2() {
    return this.http.get("https://localhost:44388/api/mesto/get/all");
  }
  napraviPolazak(
    mesto: any,
    mesto2: any,
    datum: string,
    brojPresedanja: number,
    brojMesta: number
  ) {
    return this.http.post("https://localhost:44388/api/Let/add", {
      mestoPolaskaID: mesto,
      mestoDolaskaID: mesto2,
      datumPolaska: datum,
      brojPresedanje: brojPresedanja,
      brojMesta: brojMesta,
    });
  }
}
