import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Korisnik } from "../models/korisnik.model";
import { AlertController } from "@ionic/angular";
import { AdminRegistracijaService } from "./admin-registracija.service";

@Component({
  selector: "app-admin-registracija",
  templateUrl: "./admin-registracija.page.html",
  styleUrls: ["./admin-registracija.page.scss"],
})
export class AdminRegistracijaPage implements OnInit {
  constructor(
    private registracijaService: AdminRegistracijaService,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    var roleID=sessionStorage.getItem("role");
    if(roleID!="2"){
      this.router.navigate(["/error"]);
      return;
    }
  }

  korisnik: Korisnik;
  email: any;

  register(form: NgForm) {
    this.email = form.value.email;
    if (!this.proveriPolja(form)) {
      this.vratiPoruku("Пажња", "", "Сва поља морају бити попуњена!");
    } else if (!this.lozinkeSeNePoklapaju(form)) {
      this.vratiPoruku("Пажња", "", "Потврда лозинке није успела!");
    } else {
      this.registracijaService
        .register(
          form.value.firstname,
          form.value.lastname,
          form.value.email,
          form.value.password
        )
        .subscribe(
          (data) => {
            console.log(data);       
            this.vratiPoruku(
              "Успешна регистрација",
              "",
              data+"."
            );
          },
          (error) => {
            console.log("UHVACEN ERROR");
            this.vratiPoruku(
              "Неуспешна регистрација",
              "",
              "Налог са емаил адресом: " +
                this.email +
                " већ постоји у систему!"
            );
          }
        );
      form.resetForm();
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
    } else if (form.value.email == "" || form.value.email == null) {
      return false;
    } else if (form.value.firstname == "" || form.value.firstname == null) {
      return false;
    } else if (form.value.lastname == "" || form.value.lastname == null) {
      return false;
    } else if (form.value.password == "" || form.value.password == null) {
      return false;
    } else if (form.value.repassword == "" || form.value.repassword == null) {
      return false;
    } else {
      return true;
    }
  }

  lozinkeSeNePoklapaju(form: NgForm) {
    if (form.value.password != form.value.repassword) {
      return false;
    }
    return true;
  }
}
