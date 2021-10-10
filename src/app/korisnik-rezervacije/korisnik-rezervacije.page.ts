import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { KorisnikRezervacijeService } from './korisnik-rezervacije.service';

@Component({
  selector: 'app-korisnik-rezervacije',
  templateUrl: './korisnik-rezervacije.page.html',
  styleUrls: ['./korisnik-rezervacije.page.scss'],
})
export class KorisnikRezervacijePage implements OnInit {

  constructor(  private korisnikRezervacijeService: KorisnikRezervacijeService,
    private router: Router,
    public _cookieService: CookieService,
    private alertController: AlertController) {

    this.rezervacije=this.vratiRezervacijeZaKlijenta();

   }
   rezervacije: any = [];
   korisnikID: string;
  ngOnInit() {

    this.vratiRezervacijeZaKlijenta();
  }
  vratiRezervacijeZaKlijenta() {
    this.korisnikID = sessionStorage.getItem("korisnikID");
    if (this.korisnikID == null) {
      this.vratiPoruku("Пажња","","Морате се регистровати!");
      this.router.navigate(["/register"]);
    } else {
      this.korisnikRezervacijeService
        .vratiSveRezervacije(this.korisnikID)
        .subscribe((data) => {
          this.rezervacije = data;
        });
    }
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
