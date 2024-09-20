import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NikeService } from './nike.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'NikeAngular';
  nameProductSearched?:string;
  backgroundOn:boolean=false;

  @ViewChild(ListComponent) listComponent?: ListComponent;

  constructor(private router: Router, public ns:NikeService){}

  /* ricevi stringa emessa dall output e reindirizza a /list */

  takeNameProduct(nameP:string){
this.nameProductSearched=nameP;
console.log("ricevuto dall emitter: ",this.nameProductSearched);
this.router.navigate(['/list',this.nameProductSearched]);
  }


}
