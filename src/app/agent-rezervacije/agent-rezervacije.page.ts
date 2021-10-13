import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
import { AlertController } from "@ionic/angular";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { Poruka } from "../models/poruka.model";
import { AgentRezervacijeService } from "./agent-rezervacije.service";

@Component({
  selector: "app-agent-rezervacije",
  templateUrl: "./agent-rezervacije.page.html",
  styleUrls: ["./agent-rezervacije.page.scss"],
})
export class AgentRezervacijePage implements OnInit {
  constructor(
    private agentRezervacijeService: AgentRezervacijeService,
    private router: Router,
    public _cookieService: CookieService,
    private alertController: AlertController
  ) {}
  private _HubConnection: HubConnection;

  ngOnInit() {
    var roleID = sessionStorage.getItem("role");
    if (roleID != "3") {
      this.router.navigate(["/error"]);
      return;
    }
    this.korisnikID = sessionStorage.getItem("korisnikID");
    this.vratiRezervacije();
    // this.poveziSe();
  }
  rezervacije: any = [];
  signaldata: any[] = [];
  korisnikID: string;
  poruka: Poruka;
  porukaString: string;

  vratiRezervacije() {
    this.agentRezervacijeService.vratiSveRezervacije().subscribe((data) => {
      this.rezervacije = data;
    });
  }
  odobriRezervaciju(rezervacijaID: string) {
    console.log(this.korisnikID);
    console.log(rezervacijaID);

    this.agentRezervacijeService
      .odobriRezervaciju(this.korisnikID, rezervacijaID)
      .subscribe(
        (data) => {
          this.refresh();
          this.vratiPoruku(
            "Потврда успешна",
            "",
            "Усепешно сте потврдили резервацију!"
          );
        },
        (error) => {
          this.vratiPoruku(
            "Пажња",
            "",
            "Систем не може да потврди резервацију!"
          );
        }
      );
  }

  // poveziSe() {
  //   this._HubConnection = new HubConnectionBuilder()
  //     .withUrl("https://localhost:44388/poruka")
  //     .build();
  //   this._HubConnection
  //     .start()
  //     .then(() => console.log("Connection start"))
  //     .catch((err) => {
  //       console.log("Error");
  //     });
  //   this._HubConnection.on("BroadcastMessage", (poruka) => {
  //     this.signaldata.push(poruka);
  //     console.log(poruka);
  //     this.porukaString = "Imate novu rezervaciju!";
  //   });
  // }

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
