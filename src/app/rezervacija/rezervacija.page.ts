import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";

@Component({
  selector: "app-rezervacija",
  templateUrl: "./rezervacija.page.html",
  styleUrls: ["./rezervacija.page.scss"],
})
export class RezervacijaPage implements OnInit {
  constructor(private http: HttpClient) {}
  private _HubConnection: HubConnection;

  signaldata: any[] = [];
  rezervacija: any=[];
  rezervacije: any=[];
  
  ngOnInit() {
    this._HubConnection = new HubConnectionBuilder()
      .withUrl("https://localhost:44388/rezervacije")
      .build();
    this._HubConnection
      .start()
      .then(() => console.log("Connection start"))
      .catch((err) => {
        console.log("Error");
      });
      this._HubConnection.on('BroadcastMessage',(rezervacije)=>{
        this.signaldata.push(rezervacije)
        console.log(rezervacije)
        this.rezervacija=rezervacije;
      });
  }

  senddata() {
    this.http
      .get("https://localhost:44388/api/Rezervacija/get")
      .subscribe((data) => {
        this.rezervacije=data;
      });
  }
}
