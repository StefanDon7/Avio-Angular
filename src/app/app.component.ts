import { Component } from '@angular/core';

import { AlertController, MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  ishidden: boolean=true;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private alertController:AlertController,
    private menuController:MenuController
      ) {
    this.sideMenu();
    this.initializeApp();
    if(sessionStorage.getItem("korisnikID")!=null){
      this.ishidden=false;
    }else{
      this.ime=sessionStorage.getItem("ime");
      this.prezime=sessionStorage.getItem("prezime");
      this.role=sessionStorage.getItem("role");
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ime:string;
  prezime:string;
  role:string

  sideMenu()
  {  this.navigate =
    [
      // {
      //   title : "Почетна",
      //   url   : "/login",
      //   icon  : "https://img.icons8.com/clouds/70/ffffff/home-page.png",
      //   number: 0
      // },
      // {
      //   title : "Ред вожње",
      //   url   : "/main",
      //   icon  : "https://img.icons8.com/clouds/70/ffffff/train.png",
      //   number: 0
      // },
      // {
      //   title : "Мој налог",
      //   url   : "/moj-nalog",
      //   icon  : "https://img.icons8.com/clouds/80/000000/edit-user.png",
      //   number: 0
      // },
      // {
      //   title : "Моје резервације",
      //   url   : "/moje-rezervacije",
      //   icon  : "https://img.icons8.com/clouds/80/000000/ticket.png",
      //   number: 8
      // },
    ]
  }
  openPage(page:string){
    if(page=="/moje-rezervacije"){
      if(sessionStorage.getItem("klijent")==null){   
        this.router.navigate(["/register"]);
        this.vratiPoruku("Пажња","","Морате бити регистровати!");
      }else{
        this.router.navigate([page])
      }
    }else if(page=="/moj-nalog"){
      if(sessionStorage.getItem("klijent")==null){
        this.router.navigate(["/register"]);
        this.vratiPoruku("Пажња","","Морате бити регистровати!");
      }else{
        this.router.navigate([page])
      }
    }
    else if(page=="/main"){
      this.router.navigate([page]);
    }
    else{
      this.router.navigate(["/home"]);
    }
    
  }
  async vratiPoruku(header: string, subHeader: string, poruka: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: poruka,
      buttons: ["Ok"],
    });
    await alert.present();
  }
   /*
  Unistava sessiju za klijenta i odjavljuje se!
  */
 izlogujSe() {
  sessionStorage.removeItem("role");
  sessionStorage.removeItem("ime");
  sessionStorage.removeItem("prezime");
  sessionStorage.removeItem("korisnikID");
  sessionStorage.removeItem("email");
  this.router.navigate(["/login"]);
  this.menuController.close();
  this.ishidden=true;

}
}
