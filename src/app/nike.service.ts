import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prodotti, ProdottoForCheckout } from '../assets/models/models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NikeService{
  prodottoFiltered:Prodotti | undefined;
  bannerOn=true;
  prodottiInBasket:ProdottoForCheckout[]=[]
  numberOfShoes:number=0
NMAXPairs=12;

  constructor(private http: HttpClient) {
  }


viewBannerHearderOnOff(isBannerOn:boolean){
this.bannerOn=isBannerOn;
}

allProducts(){
  return this.http.get<Prodotti[]>("http://localhost:3000/prodotti")
}

  searchById(idToSearch:number){
const id=idToSearch
return this.http.get<Prodotti>("http://localhost:3000/prodotti/"+id)
  }

// DO THE API CALL DEPENDING ON THE LISTCOMPONENT
  sneakersOnly(){
    return this.http.get<Prodotti[]>("http://localhost:3000/prodotti?categoria=Sneakers")
      }

      runningOnly(){
        return this.http.get<Prodotti[]>("http://localhost:3000/prodotti?categoria=Running")
          }

          trainingOnly(){
            return this.http.get<Prodotti[]>("http://localhost:3000/prodotti?categoria=Training")
              }
              newArrivals(){
                return this.http.get<Prodotti[]>("http://localhost:3000/prodotti?nuovo_arrivi=true")
              }
              best(){
                return this.http.get<Prodotti[]>("http://localhost:3000/prodotti?best_seller=5")
              }
  
pushToBasket(prodotto:ProdottoForCheckout){
  const prodottoCopia = { ...prodotto };
this.prodottiInBasket.push(prodottoCopia);
console.log(this.prodottiInBasket);
this.numberOfShoes=this.numberOfShoes+prodotto.quantita;
console.log("PRODOTTI NEL SERVICE ",this.prodottiInBasket);
}
/* DA TOGLIERE DOPO */
emptyArray(){
  this.prodottiInBasket=[];
  this.numberOfShoes=0;
  console.log("BASKET SVUOTATO")
}
              }
