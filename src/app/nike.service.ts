import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prodotti, ProdottoForCheckout } from '../assets/models/models';
import { map, Observable } from 'rxjs';
import prodottiData from '../assets/data/db.json';


/* 
LE CHIAMATE HTTP INIZIALMENTE ERANO STATE CREATE PER ACQUISIRE I DATI DAL JSON SERVER CREATO IN LOCALE
SUCCESSIVAMENTE PER SCOPO DIMOSTRATIVO DEL PORTFOLIO PERSONALE E POTER HOSTARE SUL MIO SITO WEB pappalardodev.com
HO DECISO DI APPOGGIARMI A api.npoint PER EFFETTUARE LE API CALL IN MANIERA DINAMICA E NON LOCALE.
IN CASO DI NON FUNZIONAMENTE APPOGIARSI A jsonbin.io (CODICE SOTTO limite di 10.000 chiamate)


Per hostare il sito e renderlo visibile sul mio portfolio ho usato app.netlify.com
*/

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
  private npoint = 'https://api.npoint.io/7af2c3cb919987d6213f';

  constructor(private http: HttpClient) {
  }


viewBannerHearderOnOff(isBannerOn:boolean){
this.bannerOn=isBannerOn;
}

//-------------------------------------------------------------------------- CHIAMATE A api.npoint.io

allProducts(){
  return this.http.get<Prodotti[]>(this.npoint+"/prodotti")
}
searchById(idToSearch:number){
  const id=idToSearch-1;
  return this.http.get<Prodotti>(this.npoint+"/prodotti/"+id)
    }
   
   sneakersOnly(){
      return this.http.get<Prodotti[]>(this.npoint+"/prodotti").pipe(
        map(response => response.filter(prodotto => prodotto.categoria === "Sneakers"))
      );
        }

        runningOnly(){
          return this.http.get<Prodotti[]>(this.npoint+"/prodotti").pipe(
            map(response => response.filter(prodotto => prodotto.categoria === "Running"))
          );
            }

            trainingOnly() {
              return this.http.get<Prodotti[]>(this.npoint + "/prodotti").pipe(
                map(response => response.filter(prodotto => prodotto.categoria === "Training"))
              );
            }
            
            newArrivals() {
              return this.http.get<Prodotti[]>(this.npoint + "/prodotti").pipe(
                map(response => response.filter(prodotto => prodotto.nuovo_arrivi === true))
              );
            }
            
            best() {
              return this.http.get<Prodotti[]>(this.npoint + "/prodotti").pipe(
                map(response => response.filter(prodotto => prodotto.best_seller === 5))
              );
            }
            

 /*   Togliere commenti per usare gli altri indirizzi e gli altri modi */
//-------------------------------------------------------------------------- CHIAMATE A jsonbin.io
/*
allProducts(): Observable<Prodotti[]> {
  return this.http.get<{ record: { prodotti: Prodotti[] } }>(this.jsonBinUrl).pipe(
    map(response => response.record.prodotti) // Mappa la risposta per restituire solo l'array di prodotti
  );
}

searchById(idToSearch: number) {
  return this.http.get<{ record: { prodotti: Prodotti[] } }>(this.jsonBinUrl).pipe(
    map(response => response.record.prodotti.find(prodotto => prodotto.id === idToSearch)) // Trova il prodotto per ID
  );
}

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
*/
//-------------------------------------------------------------------------- CHIAMATE JSON SERVER LOCALE
    
/*
 allProducts(){
  return this.http.get<Prodotti[]>("http://localhost:3000/prodotti")
}
*/
/*
  searchById(idToSearch:number){
const id=idToSearch
return this.http.get<Prodotti>("http://localhost:3000/prodotti/"+id)
  }
 
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
  
*/
                
    pushToBasket(prodotto:ProdottoForCheckout){
      const prodottoCopia = { ...prodotto }; // crea una copia dell oggetto senza modificarne l originale
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