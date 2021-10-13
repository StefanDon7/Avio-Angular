import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AdminHomeService {
  constructor(private http: HttpClient) {}

  vratiLetove() {
    return this.http.get("https://localhost:44388/api/Let/get/all");
  }
  vratiSveLetove() {
    return this.http.get("https://localhost:44388/api/Let/get/all/1");
  }
  otkaziLet(letID: string) {
    return this.http.put("https://localhost:44388/api/Let/cancel", {
      letID: letID,
    });
  }
  ponistiOtkazivanje(letID: string) {
    return this.http.put("https://localhost:44388/api/Let/update", {
      letID: letID,
    });
  }
}
