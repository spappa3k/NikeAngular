import { Component, OnInit } from '@angular/core';
import { NgSelectOption } from '@angular/forms';
import { NikeService } from '../nike.service';
import { ProdottoForCheckout } from '../../assets/models/models';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent implements OnInit{
prodottiInBasket:ProdottoForCheckout[]=[]
totalPriceProdotti:number[]=[]
totalAll:number=0;
numberOFPairs:number=0
showMaximumMessage:boolean=false;
totalAtCheckout:number=0;
isNgOnInIt=true;


  constructor(private ns:NikeService){
  ns.viewBannerHearderOnOff(false);
  }

  ngOnInit(): void {
    this.prodottiInBasket=this.ns.prodottiInBasket;

    this.prodottiInBasket.forEach(item=>{
this.numberOFPairs+=item.quantita;
    });
    console.log("Quantita: ",this.numberOFPairs);
    this.prodottiInBasket.forEach(elemento=> {
     let total=elemento.prezzo*elemento.quantita;
     this.totalAll+=total;
    });
    this.storeTotal(this.totalAll);
    this.isNgOnInIt=false;
  } 

  onQuantityChange(index:number,event:any){
   this.prodottiInBasket[index].quantita=+event.target.value;

   this.numberOFPairs=0;
   this.prodottiInBasket.forEach(item=>{
    this.numberOFPairs+=item.quantita;
        });
console.log("Quantita: ",this.numberOFPairs);
if(this.numberOFPairs>15){
  this.showMaximumMessage=true;
}

this.ns.numberOfShoes=this.numberOFPairs; /* aggiorniamo anche il service cosi l'iconcina del basket si aggiorna pure */

   /* this.selectedQuantity=+event.target.value;  /*  con il + davanti convertiamo il risultato del select in numero */
      }



hideMaxMessage(){
this.showMaximumMessage=false;
}


binIt(index:number){
this.prodottiInBasket.splice(index,1);   
this.ns.prodottiInBasket=this.prodottiInBasket;
}

storeTotal(total:number){
if(!this.isNgOnInIt){
  this.prodottiInBasket.forEach(item=>{
    this.numberOFPairs+=item.quantita;
        });
        console.log("Quantita: ",this.numberOFPairs);
        this.prodottiInBasket.forEach(elemento=> {
         let total=elemento.prezzo*elemento.quantita;
         this.totalAll+=total;
        });
        this.storeTotal(this.totalAll)
      }
this.totalAtCheckout=total;
      
}


      ngOnDestroy():void{
        console.log("distrutto");
      }



}
