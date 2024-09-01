import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'NikeAngular';
  nameProductSearched?:string;
  constructor(private router: Router){}

  /* ricevi stringa emessa dall output e reindirizza a /list */

  takeNameProduct(nameP:string){
this.nameProductSearched=nameP;
console.log("ricevuto dall emitter: ",this.nameProductSearched);
this.router.navigate(['/list',this.nameProductSearched]);
  }
}
