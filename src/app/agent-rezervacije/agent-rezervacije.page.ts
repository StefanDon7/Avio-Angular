import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { CookieService } from "angular2-cookie/services/cookies.service";
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

  ngOnInit() {
    var roleID = sessionStorage.getItem("role");
    if (roleID != "3") {
      this.router.navigate(["/error"]);
      return;
    }
    this.korisnikID = sessionStorage.getItem("korisnikID");
    this.vratiRezervacije();
  }
  rezervacije: any = [];
  korisnikID: string;

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

  // otkazirezervaciju(polazakid:string) {
  //   console.log(polazakid);
  //   console.log(this.korisnikID)
  //   this.korisnikRezervacijeService.otkaziRezervaciju(this.korisnikID,polazakid).subscribe(data=>{
  //        this.vratiRezervacijeZaKlijenta();
  //        this.vratiPoruku("Успешно","отказана резервација","")
  //   },(error) => {
  //     this.vratiPoruku("Пажња", "", "Неупешно отказивање резервације!");
  //     // this.refresh();
  //   })

  // }

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
