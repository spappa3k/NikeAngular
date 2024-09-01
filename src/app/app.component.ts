import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'NikeAngular';

  constructor(private route:Router){}

  /* ricevi stringa emessa dall output e reindirizza a /list */
  takeNameProduct(nameP:string){
let nameProductSearched=nameP;
console.log("ricevuto dall emitter: ",nameProductSearched);
this.route.navigate(["/list",nameProductSearched]);
  }
}
