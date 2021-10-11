import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AgentHomeService } from './agent-home.service';

@Component({
  selector: 'app-agent-home',
  templateUrl: './agent-home.page.html',
  styleUrls: ['./agent-home.page.scss'],
})
export class AgentHomePage implements OnInit {

  constructor(  
    private agentHomeService: AgentHomeService,
    private router: Router,
    public datepipe: DatePipe,
    private alertController: AlertController) { }


  letovi: any = [];

  ngOnInit() {
    this.vratiSveLetove();
  }

 
  vratiSveLetove(){
    this.agentHomeService.vratiLetove().subscribe(
      (data) => {
        this.letovi=data;
      },
      (error) => {
        this.vratiPoruku(
          "Пажња",
          "",
          ""
        );
       this.refresh();
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
