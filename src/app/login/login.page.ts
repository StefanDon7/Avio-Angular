import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AlertController } from "@ionic/angular";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { AppComponent } from "../app.component";
import { Korisnik } from "../models/korisnik.model";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private _cookieService: CookieService,
    private alertController: AlertController,
    private appComponents: AppComponent
  ) {}

  korisnik: Korisnik;

  ngOnInit(): void {}

  signIn(form: NgForm) {
    if (!this.proveriPolja(form)) {
      this.vratiPoruku("Пажња", "", "Сва поља морају бити попуњена!");
    } else {
      this.loginService
        .signin(form.value.email, form.value.password)
        .subscribe((data) => {
          if (data != null) {
            console.log(data)
            this.korisnik = new Korisnik(
              data[0].korisnikID,
              data[0].ime,
              data[0].prezime,
              data[0].email,
              null,
              data[0].roleID
            );
          }
         
          this.prijaviKorisnika();
          form.resetForm();
        });
    }
  }
  prijaviKorisnika() {
    console.log(this.korisnik)
    if (this.korisnik != null) {
      sessionStorage.setItem("korisnikID", this.korisnik.korisnikID + "");
      sessionStorage.setItem("ime", this.korisnik.ime + "");
      sessionStorage.setItem("prezime", this.korisnik.prezime + "");
      sessionStorage.setItem("email", this.korisnik.email + "");
      sessionStorage.setItem("role", this.korisnik.roleID + "");
      this.vratiPoruku(
        "Успешно пријављивање",
        "Добродошли",
        "Корисник: " + this.korisnik.ime + " " + this.korisnik.prezime
      );
      switch (this.korisnik.roleID) {
        case 1:
          console.log("KORISNIK");
          this.router.navigate(["/korisnik-home"]);

          break;

        case 2:
          console.log("ADMIN");
          this.router.navigate(["/admin-home"]);
          break;

        case 3:
          console.log("AGENT");
          this.router.navigate(["/agent-home"]);
          break;

        default:
      }
      this.appComponents.ishidden = false;
    } else {
      this.vratiPoruku(
        "Пажња",
        "Погрешни параметри",
        "Проверите да ли добро унели емаил и лозинку!"
      );
    }
  }

  async vratiPoruku(header: string, subHeader: string, poruka: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: poruka,
      buttons: ["Ок"],
    });
    await alert.present();
  }
  proveriPolja(form: NgForm) {
    if (form.value.email == "" || form.value.email == null) {
      return false;
    } else if (form.value.password == "" || form.value.password == null)
      return false;
    else {
      return true;
    }
  }
}
