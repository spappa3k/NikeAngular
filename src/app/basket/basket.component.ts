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
numberOFPairs:number=0
showMaximumMessage:boolean=false
totalAtAllProducts:number=0
selectedShipping:number=0
TotalAFterShipping:number=0

  constructor(public ns:NikeService){
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
     this.totalAtAllProducts+=total;
     this.TotalAFterShipping=this.totalAtAllProducts;
    });   /* prendiamo il totale all ngOnInIt  */

  } 

  onQuantityChange(index:number,event:any){
   this.prodottiInBasket[index].quantita=+event.target.value; /*  con il + davanti convertiamo il risultato del select in numero */
   this.numberOFPairs=0;
   this.prodottiInBasket.forEach(item=>{
    this.numberOFPairs+=item.quantita;
        });
console.log("Quantita: ",this.numberOFPairs);
if(this.numberOFPairs>this.ns.NMAXPairs){
  this.showMaximumMessage=true;
}

this.ns.numberOfShoes=this.numberOFPairs; /* aggiorniamo anche il service cosi l'iconcina del basket si aggiorna pure */
this.totalAtAllProducts=0;
this.storeTotal();
      }



hideMaxMessage(){
this.showMaximumMessage=false;
}


binIt(index:number){
this.prodottiInBasket.splice(index,1);   
this.ns.prodottiInBasket=this.prodottiInBasket;
this.totalAtAllProducts=0;
this.ns.numberOfShoes = 0;

for (let i = 0; i < this.prodottiInBasket.length; i++) {
  this.ns.numberOfShoes += this.prodottiInBasket[i].quantita; // Somma la quantità di ogni prodotto
}

this.storeTotal();
console.log("NS TOTALI", this.ns.prodottiInBasket);
}

storeTotal(){
  if (this.prodottiInBasket.length === 0) {
this.totalAtAllProducts=0;
    return; // Esci dalla funzione se non ci sono prodotti
}
        this.prodottiInBasket.forEach(elemento=> {
         let total=elemento.prezzo*elemento.quantita;
         this.totalAtAllProducts+=total;
        });     
        this.updateTotalAfterShipping()
}

updateTotalAfterShipping(){
  if(this.selectedShipping>0){
  this.TotalAFterShipping=this.totalAtAllProducts+this.selectedShipping;
  }else{
    this.TotalAFterShipping=this.totalAtAllProducts;
  }
}

sendTotalToNs(){
  this.ns.TotalAfterBasket=this.TotalAFterShipping;
}


      ngOnDestroy():void{
        console.log("distrutto");
      }



}
