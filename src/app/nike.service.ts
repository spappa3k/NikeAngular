import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prodotti, ProdottoForCheckout } from '../assets/models/models';
import { map, Observable } from 'rxjs';
import prodottiData from '../assets/data/db.json';


/* */

@Injectable({
  providedIn: 'root'
})

export class NikeService{
  prodottoFiltered:Prodotti | undefined;
  bannerOn=true;
  prodottiInBasket:ProdottoForCheckout[]=[]
  numberOfShoes:number=0
  NMAXPairs:number=12;
  endOfPurchase=false;
  TotalAfterBasket=0;
  basketAddedOpen=false;
  private jsonBinUrl = 'https://api.jsonbin.io/v3/b/66ffbc9fe41b4d34e43cca7e'; 

  constructor(private http: HttpClient) {
  }


viewBannerHearderOnOff(isBannerOn:boolean){
this.bannerOn=isBannerOn;
}



allProducts(): Observable<Prodotti[]> {
  return this.http.get<{ record: { prodotti: Prodotti[] } }>(this.jsonBinUrl).pipe(
    map(response => response.record.prodotti) // Mappa la risposta per restituire solo l'array di prodotti
  );
}

/*
allProducts(){
  return this.http.get<Prodotti[]>("http://localhost:3000/prodotti")
}
*/
/*
allProducts(): Observable<Prodotti[]> {
  return this.http.get<Prodotti[]>('assets/data/db.json');
}*/

  /* searchById(idToSearch:number){
const id=idToSearch
return this.http.get<Prodotti>("http://localhost:3000/prodotti/"+id)
  }
*/

searchById(idToSearch: number) {
  return this.http.get<{ record: { prodotti: Prodotti[] } }>(this.jsonBinUrl).pipe(
    map(response => response.record.prodotti.find(prodotto => prodotto.id === idToSearch)) // Trova il prodotto per ID
  );
}


// DO THE API CALL DEPENDING ON THE LISTCOMPONENT


    sneakersOnly() {
      return this.http.get<{ record: { prodotti: Prodotti[] } }>(this.jsonBinUrl).pipe(
        map(response => response.record.prodotti.filter(prodotto => prodotto.categoria === "Sneakers"))
      );
    }

    runningOnly() {
      return this.http.get<{ record: { prodotti: Prodotti[] } }>(this.jsonBinUrl).pipe(
        map(response => response.record.prodotti.filter(prodotto => prodotto.categoria === "Running"))
      );
    }
    
    trainingOnly() {
      return this.http.get<{ record: { prodotti: Prodotti[] } }>(this.jsonBinUrl).pipe(
        map(response => response.record.prodotti.filter(prodotto => prodotto.categoria === "Training"))
      );
    }

    newArrivals() {
      return this.http.get<{ record: { prodotti: Prodotti[] } }>("https://api.jsonbin.io/v3/b/66ffbc9fe41b4d34e43cca7e").pipe(
        map(response => response.record.prodotti.filter(prodotto => prodotto.nuovo_arrivi === true))
      );
    }

    best(){
      return this.http.get<{record:{prodotti:Prodotti[]}}>(this.jsonBinUrl).pipe(
        map(res=>res.record.prodotti.filter(prodotto=>prodotto.best_seller===5) )
      );
    }

 /* sneakersOnly(){
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
              } */
  
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
