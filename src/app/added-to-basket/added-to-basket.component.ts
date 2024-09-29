import { Component, EventEmitter, Input, OnInit, Output, HostListener } from '@angular/core';
import { Prodotti, ProdottoForCheckout } from '../../assets/models/models';
import { NikeService } from '../nike.service';

@Component({
  selector: 'app-added-to-basket',
  templateUrl: './added-to-basket.component.html',
  styleUrl: './added-to-basket.component.css'
})

export class AddedToBasketComponent implements OnInit{
  public getScreenWidth: any;
  public getScreenHeight: any;
  dontShow=false;

  
@Input()
prodottoToPush?:ProdottoForCheckout

/* emettiamo evento dal template al click sulla x per dire al padre di mettere iteamAdded su false cosi si chiude il minibasket */
@Output()
itemAddedOn = new EventEmitter<boolean>();


constructor(private ns:NikeService){
}

ngOnInit(): void {
  this.pushIt();

  
  this.getScreenWidth = window.innerWidth;
  this.getScreenHeight = window.innerHeight;
}

pushIt(){
  this.ns.pushToBasket(this.prodottoToPush!);
  console.log("Prodotto pushato: ", this.prodottoToPush);
}


@HostListener('window:resize', ['$event'])
onWindowResize() {
  this.getScreenWidth = window.innerWidth;
  this.getScreenHeight = window.innerHeight;
  console.log("width: ",this.getScreenWidth);
  if(this.getScreenWidth<768){
    this.dontShow=true;
  }
}
}
