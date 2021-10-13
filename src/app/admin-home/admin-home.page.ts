import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { DatePipe } from "@angular/common";
import { AlertController } from "@ionic/angular";
import { AdminHomeService } from "./admin-home.service";
import { Korisnik } from "../models/korisnik.model";
import { Mesto } from "../models/mesto.model";
@Component({
  selector: "app-admin-home",
  templateUrl: "./admin-home.page.html",
  styleUrls: ["./admin-home.page.scss"],
})
export class AdminHomePage implements OnInit {
  constructor(
    private adminHomeService: AdminHomeService,
    private router: Router,
    public datepipe: DatePipe,
    private alertController: AlertController
  ) {}
  letovi: any = [];
  saOtkazanima: boolean;
  poruka: string;
  ngOnInit() {
    var roleID = sessionStorage.getItem("role");
    if (roleID != "2") {
      this.router.navigate(["/error"]);
      return;
    }
    this.vratiLetove();
  }
  ionChange(event) {
    if (this.saOtkazanima) {
      this.saOtkazanima = false;
    } else {
      this.saOtkazanima = true;
    }
  }

  vratiLetoveCheckBox() {
    if (this.saOtkazanima) {
      this.vratiLetove1();
    } else {
      this.vratiLetove();
    }
  }

  vratiLetove() {
    this.adminHomeService.vratiLetove().subscribe(
      (data) => {
        this.letovi = data;
      },
      (error) => {
        this.vratiPoruku("Пажња", "", "");
        this.refresh();
      }
    );
  }
  vratiLetove1() {
    this.adminHomeService.vratiSveLetove().subscribe(
      (data) => {
        this.letovi = data;
      },
      (error) => {
        this.vratiPoruku("Пажња", "", "");
        this.refresh();
      }
    );
  }

  otkaziLet(letID: string) {
    this.adminHomeService.otkaziLet(letID).subscribe(
      (data) => {
        this.refresh();
      },
      (error) => {
        this.vratiPoruku(
          "Грешка",
          "Не можете отказати резервацију",
          error.message
        );
      }
    );
  }
  ponistiOtkazivanje(letID: string) {
    this.adminHomeService.ponistiOtkazivanje(letID).subscribe(
      (data) => {
        this.refresh();
      },
      (error) => {
        this.vratiPoruku(
          "Грешка",
          "Не можете отказати резервацију",
          error.message
        );
      }
    );
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
  refresh(): void {
    window.location.reload();
  }
}
