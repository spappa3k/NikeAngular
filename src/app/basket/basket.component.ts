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


  constructor(private ns:NikeService){
  ns.viewBannerHearderOnOff(false);
  }

  ngOnInit(): void {
    this.prodottiInBasket=this.ns.prodottiInBasket;
    this.prodottiInBasket.forEach(elemento=> {
     const total=elemento.prezzo*elemento.quantita;
     this.totalAll=+total;
     console.log("TOTALE:", this.totalAll);
    });
  }

  onQuantityChange(event:any){
   /* this.selectedQuantity=+event.target.value;  /*  con il + davanti convertiamo il risultato del select in numero */
      }

      ngOnDestroy():void{
        console.log("distrutto");
      }
}
