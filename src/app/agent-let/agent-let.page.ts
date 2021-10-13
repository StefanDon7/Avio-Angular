import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Mesto } from "../models/mesto.model";
import { AgentLetService } from "./agent-let.service";

@Component({
  selector: "app-agent-let",
  templateUrl: "./agent-let.page.html",
  styleUrls: ["./agent-let.page.scss"],
})
export class AgentLetPage implements OnInit {
  constructor(
    private agentletservice: AgentLetService,
    private router: Router,
    public datepipe: DatePipe,
    private alertController: AlertController
  ) {}

  today: any;
  year: any;
  selectedDate: any;
  selectedDateConverted: any;
  selectedTime: any;
  selectedTimeConverted: any;

  datum: string;

  korisnikID: string;

  rezervacija: any;

  mesta: any = [];
  mesta2: any = [];

  ngOnInit() {
    var roleID = sessionStorage.getItem("role");
    if (roleID != "3") {
      this.router.navigate(["/error"]);
      return;
    }

    this.vratiMesta();
    this.vratiMesta2();
  }

  convert() {
    let selectedDateConverted = this.datepipe.transform(
      this.selectedDate,
      "yyyy-MM-dd"
    );
    this.selectedDateConverted = selectedDateConverted;
    console.log(selectedDateConverted);
  }
  convertTime() {
    let selectedTimeConverted = this.datepipe.transform(
      this.selectedTime,
      "HH:mm"
    );
    this.selectedTimeConverted = selectedTimeConverted;
    console.log(selectedTimeConverted);
  }

  /*
 Vraca mesta i ubacuje ih u prvi kombo box!
  */
  vratiMesta() {
    this.agentletservice.vratiMesta().subscribe((mesta) => {
      this.mesta = mesta;
    });
  }
  /*
Vraca mesta i ubacuje ih u drugi kombo box!
*/
  vratiMesta2() {
    this.agentletservice.vratiMesta2().subscribe((mesta) => {
      this.mesta2 = mesta;
    });
  }
  napraviLet(mesto1: any, mesto2: any, brojPresedanja: any, brojMesta: any) {
    this.napraviDatum();
    this.agentletservice
      .napraviPolazak(mesto1, mesto2, this.datum, brojPresedanja, brojMesta)
      .subscribe((data) => {
        this.vratiPoruku("Успешно","","Креиран лет!");
      });
  }
  napraviDatum() {
    this.datum = this.selectedDateConverted + " " + this.selectedTimeConverted;
    console.log(this.datum);
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
