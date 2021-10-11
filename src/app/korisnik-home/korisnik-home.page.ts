import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { DatePipe } from "@angular/common";
import { AlertController } from "@ionic/angular";
import { KorisnikHomeService } from "./korisnik-home.service";
import { Korisnik } from "../models/korisnik.model";
import { Mesto } from "../models/mesto.model";
@Component({
  selector: "app-korisnik-home",
  templateUrl: "./korisnik-home.page.html",
  styleUrls: ["./korisnik-home.page.scss"],
})
export class KorisnikHomePage implements OnInit {
  constructor(
    private korisnikHomeService: KorisnikHomeService,
    private router: Router,
    public datepipe: DatePipe,
    private alertController: AlertController
  ) {}
  navigate : any;
  mesta: any = [];
  mesta2: any = [];
  letovi: any = [];
  bezPresedanja:boolean=false;

  today: any;
  year: any;
  selectedDate: any;
  selectedDateConverted: any;

  korisnikID: string;

  rezervacija: any;

  listaMedjustanica: any = [];

  ngOnInit() {
    var roleID=sessionStorage.getItem("role");
    if(roleID!="1"){
      this.router.navigate(["/error"]);
      return;
    }
    this.vratiMesta();
    this.vratiMesta2();
  }
  ionChange(event){
    if(this.bezPresedanja){
      this.bezPresedanja=false;
    }else{
      this.bezPresedanja=true;
    }
  }
  /*
 Vraca mesta i ubacuje ih u prvi kombo box!
  */
  vratiMesta() {
    this.korisnikHomeService.vratiMesta().subscribe((mesta) => {
      this.mesta = mesta;
    });
  }
  /*
Vraca mesta i ubacuje ih u drugi kombo box!
*/
  vratiMesta2() {
    this.korisnikHomeService.vratiMesta2().subscribe((mesta) => {
      this.mesta2 = mesta;
    });
  }

  /*
  Vraca sve polaske za pocetnu stanicu,krajnju stanicu i datum!
  */
  pretrazi(mesto1: Mesto, mesto2: Mesto) {
    console.log(this.mesta);
    if (!this.parametriDobri(mesto1, mesto2)) {
      this.vratiPoruku("Грешка", "", "Сва поља морају бити изабрана!");
    } else {
      console.log(this.bezPresedanja)
      if(this.bezPresedanja){
        this.korisnikHomeService
        .vratiLetoveBezPresedanja(mesto1.naziv, mesto2.naziv, this.selectedDateConverted)
        .subscribe((letovi) => {
          console.log(letovi);
          this.letovi = letovi;
        });
      }else{
        this.korisnikHomeService
        .vratiLetove(mesto1.naziv, mesto2.naziv, this.selectedDateConverted)
        .subscribe((letovi) => {
          console.log(letovi);
          this.letovi = letovi;
        });
      }
    }
  }

  

  parametriDobri(mesto1: Mesto, mesto2: Mesto) {
    if (mesto1 == null || mesto2 == null) {
      console.log("81");
      return false;
    } else if (this.selectedDateConverted == null) {
      console.log("85");
      return false;
    }
    return true;
  }

  /*
  Prilikom selektovanja datuma  uzima datum i konvertuje ga u odgovarajuci format kako bi u bazi mogao da ga nadje!
  */
  convert() {
    let selectedDateConverted = this.datepipe.transform(
      this.selectedDate,
      "yyyy-MM-dd"
    );
    this.selectedDateConverted = selectedDateConverted;
    console.log(selectedDateConverted);
  }
  // convertDanas() {
  //   this.today = new Date().toISOString();
  //   console.log(this.today);
  //   let danas = this.datepipe.transform(this.today, "yyyy-MM-dd");
  //   let godina = this.datepipe.transform(this.today, "yyyy");
  //   this.today = danas;
  //   this.year = godina;
  //   this.year++;
  //   console.log(this.today);
  //   console.log(this.year);
  // }
  /*
    Rezervisi kartu!
  */
  rezervisiKartuUnosUBazu(letID: string) {

   
      this.korisnikHomeService
        .rezervisiKartu(letID, this.korisnikID)
        .subscribe((data) => {
          this.vratiPoruku(
            "Полазак",
            "",
            "Успешно сте резервисали карту за полазак!"
          );
        },(error) => {
          this.vratiPoruku("Пажња", "", "Већ сте резервисали карту за овај лет!!");
          // this.refresh();
        });
  }

 
  rezervisiKartu(letID: string, datumPolaska1: string) {
    let datumPolaska = new Date(datumPolaska1);
    var vremeRezervacije = new Date();
    this.korisnikID = sessionStorage.getItem("korisnikID");
    if (this.korisnikID == null) {
      this.vratiPoruku(
        "Пажња",
        "",
        "Морате бити пријављени како би резервисали карту!"
      );
      this.router.navigate(["/login"]);
      return;
    }
    if (datumPolaska > vremeRezervacije) {
      this.rezervisiKartuUnosUBazu(letID);
    } else {
      this.vratiPoruku(
        "Пажња",
        "",
        "Не можете резервисати карту за полазак који је реализован!"
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
  refresh(): void {
    window.location.reload();
  }




}
