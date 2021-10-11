import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { AdminAgentiService } from "./admin-agenti.service";

@Component({
  selector: "app-admin-agenti",
  templateUrl: "./admin-agenti.page.html",
  styleUrls: ["./admin-agenti.page.scss"],
})
export class AdminAgentiPage implements OnInit {
  constructor(
    private adminAgentiService: AdminAgentiService,
    private router: Router,
    public _cookieService: CookieService,
    private alertController: AlertController
  ) {}

  rezervacije: any = [];

  ngOnInit() {

    this.vratiRezervacijeZaAgente();
  }

  vratiRezervacijeZaAgente() {
    this.adminAgentiService
      .vratiRezervacijeZaAgente()
      .subscribe((data) => {
        this.rezervacije = data;
      });
  }

  /*
VRACA ALERT PORUKU!
*/
  async vratiPoruku(header: string, subHeader: string, poruka: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: poruka,
      buttons: ["Ок"],
    });
    await alert.present();
  }
  refresh(): void {
    window.location.reload();
  }
}
